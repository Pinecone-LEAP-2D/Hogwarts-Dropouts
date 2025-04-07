"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { UserSchema } from "@/validations/signUpValidation";
import { Formik, useFormik } from "formik";

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = async () => {
    try {
      if (step === 1) {
        await UserSchema.pick(["username"]).validate(
          { username: formData.username },
          { abortEarly: false }
        );
      } else if (step === 2) {
        await UserSchema.pick(["email"]).validate(
          { email: formData.email },
          { abortEarly: false }
        );
      } else if (step === 3) {
        await UserSchema.pick(["password"]).validate(
          { password: formData.password },
          { abortEarly: false }
        );
      }
      setErrors({});
      return true;
    } catch (validationError: any) {
      const newErrors: Record<string, string> = {};
      validationError.inner.forEach((err: any) => {
        if (err.path) {
          newErrors[err.path] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleNext = async () => {
    const valid = await validateStep();
    if (valid) {
      if (step < 3) {
        setStep((prev) => prev + 1);
      } else {
        alert("Form submitted: " + JSON.stringify(formData, null, 2));
      }
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] bg-amber-200 h-screen" />
      <div className="w-[50%] bg-white h-screen items-center justify-center flex">
        <div className="w-[410px] min-h-[300px] flex flex-col space-y-4">
          <div>
            <p className="text-xl font-bold">Create Your Account</p>
            <p className="text-sm text-gray-500">
              {step === 1 && "Choose a username for your page"}
              {step === 2 && "Enter your email address"}
              {step === 3 && "Create a secure password"}
            </p>
          </div>

          {step === 1 && (
            <div>
              <label className="block text-sm font-medium">Username</label>
              <Input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username}</p>
              )}
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-sm font-medium">Password</label>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
          )}

          <div className="flex justify-between items-center pt-4">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep((prev) => prev - 1)}
              >
                Back
              </Button>
            )}
            <Button onClick={handleNext}>
              {step === 3 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
