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

  console.log(errors);

  return (
    <div className="relative h-full mb-0 lg:mb-10">
      <h2 className="text-xl font-semibold">Security</h2>
      <div className="border rounded-2xl p-6 mt-5">
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-6">Reset your password</h3>

          <div className="block lg:flex gap-5 mt-4">
            <div className="w-full py-2 lg:my-0">
              {/* <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01 my-2 lg:my-0"
                type="password"
                name="newPassword"
                value={values.newPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="New Password"
              /> */}
              <PrimaryInput
                type="password"
                name="newPassword"
                value={values.newPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="New Password"
              />
              {errors.newPassword && touched.newPassword ? (
                <small className="text-red-500">{errors.newPassword}</small>
              ) : null}
            </div>
            <div className="w-full py-2 lg:my-0">
              {/* <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01 my-2 lg:my-0"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Confirm New Password"
              /> */}
              <PrimaryInput
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Confirm New Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <small className="text-red-500">{errors.confirmPassword}</small>
              ) : null}
            </div>
          </div>

          <div className=" mt-10">
            <input
              type="submit"
              className=" bg-brandColor01 px-5 py-3 rounded-xl text-white font-semibold block ml-auto"
              value="Save Changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
