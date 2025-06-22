"use client";
import React, { useEffect, useState } from "react";
import { useInquiryStore } from "@/app/store/inquireForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { customFetch } from "@/utils/fetch";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { inquirySchema } from "./contact-form/schema";
import { envMode } from "@/devconfig/envConfig";

const SummaryCard = () => {
  const [fetchState, setFetchState] = useState<{
    loading: boolean;
    error: boolean;
    success: boolean;
  }>({
    loading: false,
    error: false,
    success: false,
  });
  const {
    inquiryData: {
      firstName,
      lastName,
      middleName,
      email,
      description,
      mobile,
      services,
    },
    reset,
  } = useInquiryStore();

  const router = useRouter();

  const handleEdit = () => router.push("/contact");

  const { production } = envMode;

  useEffect(() => {
    if (firstName === "") router.push("/contact");
  }, [firstName]);

  const handleConfirm = async () => {
    try {
      setFetchState((state) => ({ ...state, loading: true }));
      const baseUrl = production;
      const result = await customFetch({
        method: "POST",
        endpoint: `${baseUrl}/api/v1/quotations`,
        body: {
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          email: email,
          mobile: mobile,
          description: description,
          services: services,
        },
        schema: inquirySchema,
      });

      if (!result) {
        setFetchState((state) => ({ ...state, error: true }));
        return;
      }
      setFetchState((state) => ({ ...state, loading: false, success: true }));
      toast(`Thank you ${firstName}!`, {
        description:
          "We have received your inquiry, we will get back to as soon as possible.",
        position: "bottom-center",
        duration: 8000,
      });
      router.push("/");
      reset();
    } catch (error) {
      setFetchState((state) => ({ ...state, error: true }));
      console.log(error);
    }
  };
  return (
    <>
      <Card className="w-full max-w-[600px] ">
        <CardHeader>
          <CardTitle className={`text-2xl font-bold`}>
            Review and Confirm
          </CardTitle>
        </CardHeader>

        <CardContent className={`flex flex-col gap-4 text-sm`}>
          <div>
            <p className="font-bold">Inquired on</p>
            <p>{new Date().toDateString()}</p>
          </div>
          <div>
            <p className="font-bold">Full Name</p>
            <p>
              {firstName} {middleName} {lastName}
            </p>
          </div>

          <div>
            <p className="font-bold">Email</p>
            <p>{email}</p>
          </div>
          <div>
            <p className="font-bold">Contact Number</p>
            <p>{mobile}</p>
          </div>

          <div>
            <p className="font-bold">Selected Service/s</p>
            {services.selectedServices.map((service, index) => (
              <div key={service}>
                <p>
                  {index + 1}. {service}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p className="font-bold">Message</p>
            <p className="text-justify">{description} </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button
            size="custom"
            onClick={handleEdit}
            variant="outline"
            className="w-full "
          >
            Edit
          </Button>
          <Button
            disabled={fetchState.loading}
            onClick={handleConfirm}
            className="w-full"
            size="custom"
          >
            {fetchState.loading ? (
              <div className="flex items-center gap-2 ">
                <Loader2Icon className="animate-spin" /> Please wait
              </div>
            ) : (
              <p>Confirm</p>
            )}
          </Button>
          {fetchState.error && <p>Something went wrong</p>}
        </CardFooter>
      </Card>
    </>
  );
};

export default SummaryCard;
