import { createClient } from "./../../../lib/supabase/client";
import { NextRequest, NextResponse } from "next/server";
import { messageSchema } from "./schema";
import { sendEmail } from "@/app/lib/resend/mail";
import InquireEmail from "@/app/emails/InquireEmail";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsedBody = messageSchema.safeParse(body);
  const supabase = await createClient();

  if (parsedBody.error) {
    return NextResponse.json(
      {
        success: false,
        message: "There was error processing the data, invalid data type",
        error: parsedBody.error,
        data: null,
      },
      {
        status: 400,
      }
    );
  }
  const {
    first_name,
    middle_name,
    last_name,
    email,
    mobile,
    description,
    services,
  } = parsedBody.data;

  const { data: userData, error: userError } = await supabase
    .from("users")
    .insert({
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      email: email,
      mobile: mobile,
    })
    .select();

  if (userError) {
    return NextResponse.json(
      {
        success: false,
        message: "There was error adding the a user",
        error: userError.message,
        data: null,
      },
      {
        status: 400,
      }
    );
  }

  const { error: requestError } = await supabase
    .from("requests")
    .insert({
      user_id: userData[0].user_id,
    })
    .select();

  if (requestError) {
    return NextResponse.json(
      {
        success: false,
        message: "There was error adding the a user",
        error: requestError.message,
        data: null,
      },
      {
        status: 400,
      }
    );
  }

  const { error: messageError } = await supabase
    .from("messages")
    .insert({
      message: description,
      user_id: userData[0].user_id,
    })
    .select();

  if (messageError) {
    return NextResponse.json(
      {
        success: false,
        message: "There was error adding the a user",
        error: messageError.message,
        data: null,
      },
      {
        status: 400,
      }
    );
  }

  const parsedServiceData = services.selectedServices.map((service) => ({
    service_name: service,
    user_id: userData[0].user_id,
  }));

  const { error: serviceError } = await supabase
    .from("services")
    .insert(parsedServiceData)
    .select();

  if (serviceError) {
    return NextResponse.json(
      {
        success: false,
        message: "There was error adding the a user",
        error: serviceError.message,
        data: null,
      },
      {
        status: 400,
      }
    );
  }
  console.log(parsedBody.data);

  sendEmail({
    from: "inquiry@resend.dev",
    to: parsedBody.data.email,
    subject: "Confirmation: We've got your inquiry",
    react: InquireEmail({
      firstName: parsedBody.data.first_name,
      contents: description,
    }),
  });

  return NextResponse.json(
    {
      success: true as const,
      message: "success",
      data: parsedBody.data,
      error: null,
    },
    {
      status: 200,
    }
  );
}
