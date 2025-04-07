import { z } from "zod";

export const profileSchema = z.object({
  avatarImage: z.string().min(1, "Please enter image."),
  socialMediaURL: z.string().min(1, "Please enter a social link.").url(),
  name: z.string().min(1, "Please enter name."),
  about: z.string().min(1, "Please enter info about yourself."),
});
export const payInfoSchema = z.object({
  country: z.string().min(1, "Select country to continue."),
  firstName: z.string().min(1, "First name required."),
  lastName: z.string().min(1, "Last name required."),
  cardNumber: z.string().length(16, "Invalid card number."),
  expired: z.date(),
  cvc: z.number().max(999),
  year: z.string().length(4, "Invalid year"),
});
