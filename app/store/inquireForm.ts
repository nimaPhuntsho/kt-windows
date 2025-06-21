import { inquirySchema } from "./../../components/custom-ui/contact-form/schema";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import z from "zod";

type InquireStore = {
  inquiryData: z.infer<typeof inquirySchema>;
  update: (data: z.infer<typeof inquirySchema>) => void;
  reset: () => void;
};

export const useInquiryStore = create<InquireStore>()(
  persist(
    (set) => ({
      inquiryData: {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        mobile: "",
        description: "",
        services: {
          selectedServices: [],
        },
      },
      update: (data) => set({ inquiryData: data }),
      reset: () =>
        set({
          inquiryData: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            mobile: "",
            description: "",
            services: {
              selectedServices: [],
            },
          },
        }),
    }),
    {
      name: "inquiry-storage", // key in localStorage
    }
  )
);
