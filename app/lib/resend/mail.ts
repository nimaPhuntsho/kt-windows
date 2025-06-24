import { Resend } from "resend";

import React from "react"; // Required for JSX render

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendEmail = async ({
  from,
  to,
  subject,
  react,
}: {
  from: string;
  to: string;
  subject: string;
  react: React.ReactElement;
}) => {
  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    react,
  });

  if (error) {
    return {
      success: false as const,
      message: "There was problem sending the email",
      error: error.message,
    };
  }

  return {
    success: true,
    message: "Email sent!",
    data: data,
    error: null,
  };
};
