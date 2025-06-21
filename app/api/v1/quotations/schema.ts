import { ServiceEnum } from "@/components/custom-ui/contact-form/schema";
import z from "zod";

export const messageSchema = z.object({
  first_name: z.string(),
  middle_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  mobile: z.string(),
  description: z.string(),
  services: z.object({
    selectedServices: z.array(ServiceEnum),
  }),
});
