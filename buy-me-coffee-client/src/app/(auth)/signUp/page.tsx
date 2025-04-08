"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const stepSchemas = [
  z.object({
    username: z.string().min(2, "Username must be at least 2 characters"),
  }),
  z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(4, "Password must be at least 4 characters"),
  }),
];

const fullSchema = stepSchemas.reduce(
  (acc, curr) => acc.merge(curr),
  z.object({})
);
type FormData = z.infer<typeof fullSchema>;

export default function SignUpStepperForm() {
  const [step, setStep] = useState<number>(0);

  const form = useForm<FormData>({
    resolver: zodResolver(stepSchemas[step]),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const nextStep = async () => {
    const valid = await form.trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
    alert("Form submitted!");
  };

  return (
    <div className="w-full flex items-center justify-center bg-white">
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <div>
              <h2 className="text-xl font-bold">Create Your Account</h2>
              <p className="text-sm text-muted-foreground">
                {step === 0
                  ? "Choose a username for your page"
                  : "Enter your email and password"}
              </p>
            </div>

            {step === 0 && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <div className="flex justify-between pt-4">
              {step > 0 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Back
                </Button>
              )}
              {step < stepSchemas.length - 1 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
}
