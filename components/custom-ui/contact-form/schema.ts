import z from "zod";

export const ServiceEnum = z.enum([
  "Sliding windows",
  "Sliding doors",
  "Awing windows",
  "Sunroom or glass house",
  "Pargolas",
  "Outdoor decks",
  "Balustrade fencing",
]);

export const inquirySchema = z.object({
  first_name: z.string().min(2, {
    message: "First Name should at least have 2 alphabets",
  }),
  middleName: z.string().optional(),
  last_name: z.string().min(2, {
    message: "Last Name should at least have 2 alphabets",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  mobile: z
    .string()
    .min(10, { message: "Mobile number must be 10 digits" })
    .max(10, { message: "Mobile number must be 10 digits" })
    .refine((val) => val.startsWith("04"), {
      message: "Mobile number must start with 04",
    })
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "Mobile number must only have numeric values",
    }),
  services: z.object({
    selectedServices: z.array(ServiceEnum).min(1, {
      message: "Please select at least one",
    }),
  }),
  description: z.string().min(10, {
    message: "The message should have at least 10 alphabets",
  }),
});
