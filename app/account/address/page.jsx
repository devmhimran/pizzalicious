"use client";
import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

const billingAddressValidationSchema = Yup.object({
  firstName: Yup.string().max(20).required("Please enter your first name"),
  lastName: Yup.string().max(20).required("Please enter last name"),
  addressLine1: Yup.string().max(50).required("Please enter address line 1"),
  addressLine2: Yup.string(),
  city: Yup.string().max(20).required("Please enter your town/city"),
  postalCode: Yup.string().max(6).required("Please enter postal code"),
  email: Yup.string().required("please enter your email"),
});

const shippingAddressValidationSchema = Yup.object({
  firstName: Yup.string().max(20).required("Please enter your first name"),
  lastName: Yup.string().max(20).required("Please enter last name"),
  addressLine1: Yup.string().max(50).required("Please enter address line 1"),
  addressLine2: Yup.string(),
  city: Yup.string().max(20).required("Please enter your town/city"),
  postalCode: Yup.string().max(6).required("Please enter postal code"),
});

const Page = () => {
  const [addressSwitch, setAddressSwitch] = useState(true);
  const billingAddress = {
    firstName: "John",
    lastName: "Doe",
    addressLine1: "Mirpur",
    addressLine2: "",
    city: "Dhaka",
    postalCode: "1216",
    email: "example@domain.com",
  };

  const shippingAddress = {
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postalCode: "",
  };

  const billingAddressFormik = useFormik({
    initialValues: billingAddress,
    validationSchema: billingAddressValidationSchema,
    onSubmit: (values) => {
      if (values) {
        console.log(values);
        toast.success("Successfully change billing address");
      }
    },
  });

  const shippingAddressFormik = useFormik({
    initialValues: shippingAddress,
    validationSchema: shippingAddressValidationSchema,
    onSubmit: (values) => {
      if (values) {
        console.log(values);
        toast.success("Successfully change shipping address");
      }
    },
  });

  return (
    <div className="relative h-full">
      <title>Address - Pizzalicious</title>
      <div className="border rounded-md p-6 bg-white">
        <div className="flex mb-2">
          <button
            className={`text-lg font-semibold mb-6 px-3.5 py-2 ${
              addressSwitch ? "border-x border-t" : "border-b"
            }`}
            onClick={() => setAddressSwitch(true)}
          >
            Billing Address
          </button>
          <button
            className={`text-lg font-semibold mb-6 px-3.5 py-2 ${
              addressSwitch ? "border-b" : "border-x border-t"
            }`}
            onClick={() => setAddressSwitch(false)}
          >
            Shipping Address
          </button>
        </div>
        <div className="block lg:flex gap-5">
          {addressSwitch ? (
            <form
              className="w-full"
              onSubmit={billingAddressFormik.handleSubmit}
            >
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="firstName"
                  value={billingAddressFormik.values.firstName}
                  onBlur={billingAddressFormik.handleBlur}
                  onChange={billingAddressFormik.handleChange}
                  label="First Name"
                  inputId="firstName"
                />
                {billingAddressFormik.errors.firstName &&
                billingAddressFormik.touched.firstName ? (
                  <small className="text-red-500">
                    {billingAddressFormik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="lastName"
                  value={billingAddressFormik.values.lastName}
                  onBlur={billingAddressFormik.handleBlur}
                  onChange={billingAddressFormik.handleChange}
                  label="Last Name"
                  inputId="lastName"
                />
                {billingAddressFormik.errors.lastName &&
                billingAddressFormik.touched.lastName ? (
                  <small className="text-red-500">
                    {billingAddressFormik.errors.lastName}
                  </small>
                ) : null}
              </div>
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="addressLine1"
                  value={billingAddressFormik.values.addressLine1}
                  onBlur={billingAddressFormik.handleBlur}
                  onChange={billingAddressFormik.handleChange}
                  label="Address Line 1"
                  inputId="addressLine1"
                />
                {billingAddressFormik.errors.addressLine1 &&
                billingAddressFormik.touched.addressLine1 ? (
                  <small className="text-red-500">
                    {billingAddressFormik.errors.addressLine1}
                  </small>
                ) : null}
              </div>
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="addressLine2"
                  value={billingAddressFormik.values.addressLine2}
                  onBlur={billingAddressFormik.handleBlur}
                  onChange={billingAddressFormik.handleChange}
                  label="Address Line 2 (Optional)"
                  inputId="addressLine2"
                />
                {billingAddressFormik.errors.addressLine2 &&
                billingAddressFormik.touched.addressLine2 ? (
                  <small className="text-red-500">
                    {billingAddressFormik.errors.addressLine2}
                  </small>
                ) : null}
              </div>
              <div className="flex gap-3">
                <div className="my-2 lg:my-3">
                  <PrimaryInput
                    type="text"
                    name="city"
                    value={billingAddressFormik.values.city}
                    onBlur={billingAddressFormik.handleBlur}
                    onChange={billingAddressFormik.handleChange}
                    label="Town/City"
                    inputId="city"
                  />
                  {billingAddressFormik.errors.city &&
                  billingAddressFormik.touched.city ? (
                    <small className="text-red-500">
                      {billingAddressFormik.errors.city}
                    </small>
                  ) : null}
                </div>
                <div className="my-2 lg:my-3">
                  <PrimaryInput
                    type="text"
                    name="postalCode"
                    value={billingAddressFormik.values.postalCode}
                    onBlur={billingAddressFormik.handleBlur}
                    onChange={billingAddressFormik.handleChange}
                    label="Postal Code"
                    inputId="postalCode"
                  />
                  {billingAddressFormik.errors.postalCode &&
                  billingAddressFormik.touched.postalCode ? (
                    <small className="text-red-500">
                      {billingAddressFormik.errors.postalCode}
                    </small>
                  ) : null}
                </div>
              </div>
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="email"
                  name="email"
                  value={billingAddressFormik.values.email}
                  onBlur={billingAddressFormik.handleBlur}
                  onChange={billingAddressFormik.handleChange}
                  label="Email"
                  inputId="email"
                />
                {billingAddressFormik.errors.email &&
                billingAddressFormik.touched.email ? (
                  <small className="text-red-500">
                    {billingAddressFormik.errors.email}
                  </small>
                ) : null}
              </div>
              <div className="py-2 lg:py-3">
                <input
                  type="submit"
                  className=" bg-brandColor01 px-5 py-3 rounded-md text-white font-semibold block mr-auto"
                  defaultValue="Save Changes"
                />
              </div>
            </form>
          ) : (
            <form
              className="w-full mt-5 lg:mt-0"
              onSubmit={shippingAddressFormik.handleSubmit}
            >
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="firstName"
                  value={shippingAddressFormik.values.firstName}
                  onBlur={shippingAddressFormik.handleBlur}
                  onChange={shippingAddressFormik.handleChange}
                  label="First Name"
                  inputId="firstName"
                />
                {shippingAddressFormik.errors.firstName &&
                shippingAddressFormik.touched.firstName ? (
                  <small className="text-red-500">
                    {shippingAddressFormik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="lastName"
                  value={shippingAddressFormik.values.lastName}
                  onBlur={shippingAddressFormik.handleBlur}
                  onChange={shippingAddressFormik.handleChange}
                  label="Last Name"
                  inputId="lastName"
                />
                {shippingAddressFormik.errors.lastName &&
                shippingAddressFormik.touched.lastName ? (
                  <small className="text-red-500">
                    {shippingAddressFormik.errors.lastName}
                  </small>
                ) : null}
              </div>
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="addressLine1"
                  value={shippingAddressFormik.values.addressLine1}
                  onBlur={shippingAddressFormik.handleBlur}
                  onChange={shippingAddressFormik.handleChange}
                  label="Address Line 1"
                  inputId="addressLine1"
                />
                {shippingAddressFormik.errors.addressLine1 &&
                shippingAddressFormik.touched.addressLine1 ? (
                  <small className="text-red-500">
                    {shippingAddressFormik.errors.addressLine1}
                  </small>
                ) : null}
              </div>
              <div className="my-2 lg:my-3">
                <PrimaryInput
                  type="text"
                  name="addressLine2"
                  value={shippingAddressFormik.values.addressLine2}
                  onBlur={shippingAddressFormik.handleBlur}
                  onChange={shippingAddressFormik.handleChange}
                  label="Address Line 2 (Optional)"
                  inputId="addressLine2"
                />
                {shippingAddressFormik.errors.addressLine2 &&
                shippingAddressFormik.touched.addressLine2 ? (
                  <small className="text-red-500">
                    {shippingAddressFormik.errors.addressLine2}
                  </small>
                ) : null}
              </div>
              <div className="flex gap-3 items-center my-2 lg:my-3">
                <div className="w-full">
                  <PrimaryInput
                    type="text"
                    name="city"
                    value={shippingAddressFormik.values.city}
                    onBlur={shippingAddressFormik.handleBlur}
                    onChange={shippingAddressFormik.handleChange}
                    label="Town/City"
                    inputId="city"
                  />
                  {shippingAddressFormik.errors.city &&
                  shippingAddressFormik.touched.city ? (
                    <small className="text-red-500">
                      {shippingAddressFormik.errors.city}
                    </small>
                  ) : null}
                </div>

                <div className="w-full">
                  <PrimaryInput
                    type="text"
                    name="postalCode"
                    value={shippingAddressFormik.values.postalCode}
                    onBlur={shippingAddressFormik.handleBlur}
                    onChange={shippingAddressFormik.handleChange}
                    label="Postal Code"
                    inputId="postalCode"
                  />
                  {shippingAddressFormik.errors.postalCode &&
                  shippingAddressFormik.touched.postalCode ? (
                    <small className="text-red-500">
                      {shippingAddressFormik.errors.postalCode}
                    </small>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
