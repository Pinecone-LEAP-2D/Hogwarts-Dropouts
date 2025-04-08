"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee } from "lucide-react";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Too Short!").required("Password is required"),
});

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log("Login data:", values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 w-full flex flex-col items-center justify-center">
            <div className="w-1/3 ">
              <h1 className="text-sm text-forgeground font-bold">Email</h1>
              <Field
                as={Input}
                type="email"
                className="w-full"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <div className="w-1/3">
              <h2 className="text-sm text-forgeground font-bold">Password</h2>
              <Field
                as={Input}
                type="password"
                name="password"
                className="w-full"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500 mt-1"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-1/3">
              {isSubmitting ? "Logging in..." : "Continue"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
