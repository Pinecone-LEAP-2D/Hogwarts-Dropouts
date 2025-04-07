import { payInfoSchema } from "@/validations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const countris = [
  "United States",
  "Australia",
  "Mongolia",
  "New Zealand",
  "United Kingdom",
];
export const SetPay = () => {
  const form = useForm<z.infer<typeof payInfoSchema>>({
    resolver: zodResolver(payInfoSchema),
    defaultValues: {
      country: "",
      firstName: "",
      lastName: "",
      cardNumber: "",
      expired: new Date(), // Default to the current date
      cvc: 0, // Default CVC value (or adjust as needed)
      year: "",
    },
  });
  return (
    <FormProvider {...form}>
      <form action="">
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Select country</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {countris.map((country, index) => {
                      return (
                        <SelectItem key={index} value={country}>
                          {country}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expired"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="expired">Select country</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {countris.map((country, index) => {
                      return (
                        <SelectItem key={index} value={country}>
                          {country}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Select country</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {countris.map((country, index) => {
                      return (
                        <SelectItem key={index} value={country}>
                          {country}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </FormProvider>
  );
};
