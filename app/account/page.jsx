"use client";
import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";
import { useFormik } from "formik";
import Head from "next/head";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

const profileUpdateSchema = Yup.object({
  firstName: Yup.string().max(20).required("Please enter your first name"),
  lastName: Yup.string().max(20).required("Please enter last name"),
  phone: Yup.string().required("Please enter your phone number"),
  email: Yup.string().required("Please enter your email"),
});

const Page = () => {
  // const handleSubmit = (e) => {
  //   console.log(e);
  // };
  // const handleChange = (e) => {
  //   console.log(e.target);
  // };

  const profileValues = {
    firstName: "John",
    lastName: "Doe",
    email: "example@domain.com",
    phone: "+8801534871992",
  };

  const profileUpdateFormik = useFormik({
    initialValues: profileValues,
    validationSchema: profileUpdateSchema,
    onSubmit: (values) => {
      if (values) {
        console.log(values);
        toast.success("Successfully change account info");
      }
    },
  });

  return (
    <div className="relative">
      <title>Account - Pizzalicious</title>

      {/* <h2 className="text-xl font-semibold">Account</h2> */}
      <div className="border rounded-md p-6 bg-white">
        <h3 className="text-lg font-semibold mb-6">Personal information</h3>
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 object-cover rounded-md"
            src="/assets/pizzalicious-hero-avatar-image.png"
            alt=""
          />
          <button className="border border-brandColor01 px-4 py-2 rounded-md text-brandColor01 font-semibold">
            Change
          </button>
          <button className="text-gray-400 font-semibold">Remove</button>
        </div>

        <form onSubmit={profileUpdateFormik.handleSubmit}>
          <div className="flex gap-5 my-2 lg:my-3">
            <div className="w-full">
              <PrimaryInput
                type="text"
                name="firstName"
                value={profileUpdateFormik.values.firstName}
                onBlur={profileUpdateFormik.handleBlur}
                onChange={profileUpdateFormik.handleChange}
                label="First Name"
                inputId="firstName"
              />
              {profileUpdateFormik.errors.firstName &&
              profileUpdateFormik.touched.firstName ? (
                <small className="text-red-500">
                  {profileUpdateFormik.errors.firstName}
                </small>
              ) : null}
            </div>
            <div className="w-full">
              <PrimaryInput
                type="text"
                name="lastName"
                value={profileUpdateFormik.values.lastName}
                onBlur={profileUpdateFormik.handleBlur}
                onChange={profileUpdateFormik.handleChange}
                label="Last Name"
                inputId="lastName"
              />
              {profileUpdateFormik.errors.lastName &&
              profileUpdateFormik.touched.lastName ? (
                <small className="text-red-500">
                  {profileUpdateFormik.errors.lastName}
                </small>
              ) : null}
            </div>
          </div>
          <div className="block lg:flex gap-5">
            <PrimaryInput
              className=" my-2 lg:my-3"
              type="email"
              name="email"
              value={profileUpdateFormik.values.email}
              onBlur={profileUpdateFormik.handleBlur}
              onChange={profileUpdateFormik.handleChange}
              label="Email"
              inputId="email"
            />
            {profileUpdateFormik.errors.email &&
            profileUpdateFormik.touched.email ? (
              <small className="text-red-500">
                {profileUpdateFormik.errors.email}
              </small>
            ) : null}
            <PrimaryInput
              className=" my-2 lg:my-3"
              type="phone"
              name="phone"
              value={profileUpdateFormik.values.phone}
              onBlur={profileUpdateFormik.handleBlur}
              onChange={profileUpdateFormik.handleChange}
              label="Phone"
              inputId="phone"
            />
            {profileUpdateFormik.errors.phone &&
            profileUpdateFormik.touched.phone ? (
              <small className="text-red-500">
                {profileUpdateFormik.errors.phone}
              </small>
            ) : null}
          </div>
          <div className=" mt-2 lg:mt-3">
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
