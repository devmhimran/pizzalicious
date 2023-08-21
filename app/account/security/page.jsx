"use client";

import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

const resetPassword = Yup.object({
  newPassword: Yup.string()
    .min(6, "New Password Must be 6")
    .max(20)
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .required("Please enter your confirm password")
    .oneOf([Yup.ref("newPassword"), null], "Please enter correct password"),
});

const Page = () => {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: resetPassword,
    onSubmit: (values) => {
      if (values) {
        console.log(values);
        toast.success("Successfully reset your password!");
      }
    },
  });

  return (
    <div className="relative h-full mb-0 lg:mb-10">
      <title>Security - Pizzalicious</title>
      <div className="border rounded-md p-6 bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-6">Reset your password</h3>

          <div className="mt-4">
            <div className="w-full my-2 lg:my-3">
              <PrimaryInput
                type="password"
                name="newPassword"
                label="New Password"
                inputId="newPassword"
                value={values.newPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.newPassword && touched.newPassword ? (
                <small className="text-red-500">{errors.newPassword}</small>
              ) : null}
            </div>
            <div className="w-full my-2 lg:my-3">
              <PrimaryInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                inputId="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <small className="text-red-500">{errors.confirmPassword}</small>
              ) : null}
            </div>
          </div>

          <div className="py-2 lg:py-3">
            <input
              type="submit"
              className=" bg-brandColor01 px-5 py-3 rounded-md text-white font-semibold block mr-auto"
              defaultValue="Save Changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
