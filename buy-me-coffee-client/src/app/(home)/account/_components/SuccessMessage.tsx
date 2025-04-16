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
import { useProfile } from "@/providers/ProfileProvider";
import { MessageType } from "@/validations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

export const SuccessMessage = () => {
  const { user, updateProfile } = useProfile();
  const [isSaving, setIsSaving] = useState(false);
  const form = useForm<z.infer<typeof MessageType>>({
    resolver: zodResolver(MessageType),
    defaultValues: {
      successMessage: user.successMessage,
    },
  });

  const onSubmit = async (values: z.infer<typeof MessageType>) => {
    setIsSaving(true);
    try {
      await updateProfile({
        ...values,
        id: "",
        name: undefined,
        avatarImage: undefined,
        socialMediaURL: undefined,
        about: undefined,
        backgroundImage: undefined,
        bankCards: [],
      });
    } catch (Error) {
      console.error("error", Error);
    } finally {
      setIsSaving(false);
    }
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
          <Button type="submit" className="w-full" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
