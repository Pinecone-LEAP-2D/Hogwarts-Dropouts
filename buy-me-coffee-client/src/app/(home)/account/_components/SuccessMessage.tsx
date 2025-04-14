"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { MessageType } from "@/validations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

export const SuccessMessage = () => {
  const form = useForm<z.infer<typeof MessageType>>({
    resolver: zodResolver(MessageType),
    defaultValues: {
      successMessage: "",
    },
  });
  const onSubmit = (values: z.infer<typeof MessageType>) => {
    console.log(values);
    console.log("success");
  };
  return (
    <FormProvider {...form}>
      <form className="p-5 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 border p-5 rounded-md">
          <p className="font-bold">Success message</p>
          <FormField
            control={form.control}
            name="successMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confimation message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write success message."
                    id="successMessage"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Save changes
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
