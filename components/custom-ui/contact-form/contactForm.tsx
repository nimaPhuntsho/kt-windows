"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import z from "zod";
import { inquirySchema, ServiceEnum } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInquiryStore } from "@/app/store/inquireForm";
import { useRouter } from "next/navigation";
import { startCase } from "lodash";
import { Checkbox } from "@/components/ui/checkbox";
type InquiryType = z.infer<typeof inquirySchema>;

const ContactForm = () => {
  const { update, inquiryData } = useInquiryStore();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryType>({
    defaultValues: inquiryData,
    resolver: zodResolver(inquirySchema),
  });
  const router = useRouter();
  const services = ServiceEnum.options;

  useEffect(() => {
    reset(inquiryData);
  }, [inquiryData, reset]);

  const submitHandler: SubmitHandler<InquiryType> = (data) => {
    const polishedData = {
      ...data,
      firstName: startCase(data.first_name),
      middleName: startCase(data.middleName),
      lastName: startCase(data.last_name),
    };
    update(polishedData);
    router.push("/contact/summary");
  };

  return (
    <>
      <div className={`flex flex-col gap-4 w-lg`}>
        <div>
          <h1 className={`font-bold  text-2xl`}>Inquiry Form</h1>
          <p>We will get in touch with you shortly</p>
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          action=""
          className={`flex flex-col gap-6`}
        >
          <div className={`flex flex-col gap-2`}>
            <Label>First Name</Label>
            <Controller
              name="first_name"
              control={control}
              render={({ field }) => <Input type="text" {...field} />}
            />
            {errors.first_name && (
              <p className="text-[#de2c41]">{errors.first_name.message}</p>
            )}
          </div>
          <div className={`flex flex-col gap-2`}>
            <Label>Middle Name</Label>
            <Controller
              name="middleName"
              control={control}
              render={({ field }) => <Input type="text" {...field} />}
            />
          </div>
          <div className={`flex flex-col gap-2`}>
            <Label>Last Name</Label>
            <Controller
              name="last_name"
              control={control}
              render={({ field }) => <Input type="text" {...field} />}
            />
            {errors.last_name && (
              <p className="text-[#de2c41]">{errors.last_name.message}</p>
            )}
          </div>
          <div className={`flex flex-col gap-2`}>
            <Label>Email</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input type="text" {...field} />}
            />
            {errors.email && (
              <p className="text-[#de2c41]">{errors.email.message}</p>
            )}
          </div>
          <div className={`flex flex-col gap-2`}>
            <Label>Mobile</Label>
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => <Input type="tel" {...field} />}
            />
            {errors.mobile && (
              <p className="text-[#de2c41]">{errors.mobile.message}</p>
            )}
          </div>
          <div className={`flex flex-col gap-2`}>
            <Label>Services</Label>
            <Controller
              name="services.selectedServices"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col gap-4">
                  {services.map((service) => (
                    <div className="flex items-center gap-2" key={service}>
                      <Checkbox
                        id={service}
                        checked={field.value.includes(service)}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...field.value, service]
                            : field.value.filter((val) => val !== service);
                          field.onChange(newValue);
                        }}
                      />
                      <Label htmlFor={service}>{service}</Label>
                    </div>
                  ))}
                </div>
              )}
            />
            {errors.services && (
              <p className="text-[#de2c41]">
                {errors.services.selectedServices?.message}
              </p>
            )}
          </div>
          <div className={`flex flex-col gap-2`}>
            <Label>
              Description{" "}
              <span className="text-">(estimated measurements)</span>
            </Label>

            <Controller
              name="description"
              control={control}
              render={({ field }) => <Textarea {...field} />}
            />
            {errors.description && (
              <p className="text-[#de2c41]">{errors.description.message}</p>
            )}
          </div>
          <Button size="custom" type="submit">
            Next
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
