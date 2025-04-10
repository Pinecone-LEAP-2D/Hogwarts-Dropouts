"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { profileSchema } from "@/validations/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

export const CreateProfile = () => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      about: "",
      avatarImage: "",
      socialMediaURL: "",
    },
  });
  const onSubmit = (values: z.infer<typeof profileSchema>) => {
    console.log(values);
    console.log("success");
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      form.setValue("avatarImage", objectUrl);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-10 py-40"
      >
        <p className="font-bold text-3xl">Complete your profile page</p>
        <FormField
          control={form.control}
          name="avatarImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="image">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Add image</p>
                  <div
                    className={cn(
                      "w-[150px] h-[150px] rounded-full flex items-center justify-center border border-dashed border-2",
                      form.getValues("avatarImage").length !== 0 && "hidden"
                    )}
                  >
                    <Camera color="gray" />
                  </div>
                  {form.getValues("avatarImage").length !== 0 && (
                    <img
                      src={form.getValues("avatarImage")}
                      alt="Avatar Preview"
                      className="w-[150px] h-[150px] rounded-full"
                    />
                  )}
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  id="image"
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  {...field}
                  placeholder="Enter your name here."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="about">About</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write about yourself here."
                  id="about"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="socialMediaURL"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="socialMediaURL">Social media URL</FormLabel>
              <FormControl>
                <Input
                  id="socialMediaURL"
                  type="text"
                  {...field}
                  placeholder="https://"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            onClick={() => onSubmit(form.getValues())}
            className="w-1/2"
          >
            Continue
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
//http://localhost:4000/profile/?currentUser=sar
