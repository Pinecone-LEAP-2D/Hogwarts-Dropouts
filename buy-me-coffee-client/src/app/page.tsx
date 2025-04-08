
"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coffee } from "lucide-react"

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Too Short!").required("Password is required"),
})

export default function LoginPage() {
  return (
    <>
    <div className="flex w-full   bg-gray-100 px-4">
      <div className="w-1/2  h-screen bg-amber-400">
        <div className="flex ml-[100px] mt-[60px] font-bold text-2xl">
          <Coffee />
          <p> Buy Me Coffee </p>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src="coffee.png" />
          <p className="font-bold">Fund your creative work</p>
          <p>Accept support. Start a membership. Set up a shop. It's easier than you think.</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 h-screen">
        <Card className="w-1/2 h-[350px] max-w-md shadow-md">
          <CardContent className="p-6 ">
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log("Login data:", values)

              } }
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <h1 className="text-sm text-forgeground font-bold">Email</h1>
                    <Field
                      as={Input}
                      type="email"
                      name="email"
                      placeholder="Email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-500 mt-1" />
                  </div>

                  <div>
                    <h2 className="text-sm text-forgeground font-bold">Password</h2>
                    <Field
                      as={Input}
                      type="password"
                      name="password"
                      placeholder="Password" />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-500 mt-1" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Logging in..." : "Continue"}
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
    
      </>
  )
}

