"use client";
import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";

const billingAddressValidationSchema = Yup.object({
  firstName: Yup.string().max(20).required("please enter your first name"),
  lastName: Yup.string().max(20).required("please enter last name"),
  addressLine1: Yup.string().max(50).required("please enter address line 1"),
  addressLine2: Yup.string(),
  city: Yup.string().max(20).required("please enter your town/city"),
  postalCode: Yup.string().max(6).required("please enter postal code"),
  email: Yup.string().required("please enter your email"),
});

const shippingAddressValidationSchema = Yup.object({
  firstName: Yup.string().max(20).required("please enter your first name"),
  lastName: Yup.string().max(20).required("please enter last name"),
  addressLine1: Yup.string().max(50).required("please enter address line 1"),
  addressLine2: Yup.string(),
  city: Yup.string().max(20).required("please enter your town/city"),
  postalCode: Yup.string().max(6).required("please enter postal code"),
});

const Page = () => {
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
      <h2 className="text-xl font-semibold">Additional Information</h2>
      <div className="border rounded-2xl p-6 mt-5">
        <div className="block lg:flex gap-5 mt-4">
          <form className="w-full" onSubmit={billingAddressFormik.handleSubmit}>
            <h3 className="text-lg font-semibold mb-6">Billing Address</h3>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="firstName"
                value={billingAddressFormik.values.firstName}
                onBlur={billingAddressFormik.handleBlur}
                onChange={billingAddressFormik.handleChange}
                placeholder="Enter first name"
              />
              {billingAddressFormik.errors.firstName &&
              billingAddressFormik.touched.firstName ? (
                <small className="text-red-500">
                  {billingAddressFormik.errors.firstName}
                </small>
              ) : null}
            </div>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="lastName"
                value={billingAddressFormik.values.lastName}
                onBlur={billingAddressFormik.handleBlur}
                onChange={billingAddressFormik.handleChange}
                placeholder="Enter last name"
              />
              {billingAddressFormik.errors.lastName &&
              billingAddressFormik.touched.lastName ? (
                <small className="text-red-500">
                  {billingAddressFormik.errors.lastName}
                </small>
              ) : null}
            </div>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="addressLine1"
                value={billingAddressFormik.values.addressLine1}
                onBlur={billingAddressFormik.handleBlur}
                onChange={billingAddressFormik.handleChange}
                placeholder="Enter Address Line 1"
              />
              {billingAddressFormik.errors.addressLine1 &&
              billingAddressFormik.touched.addressLine1 ? (
                <small className="text-red-500">
                  {billingAddressFormik.errors.addressLine1}
                </small>
              ) : null}
            </div>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="addressLine2"
                value={billingAddressFormik.values.addressLine2}
                onBlur={billingAddressFormik.handleBlur}
                onChange={billingAddressFormik.handleChange}
                placeholder="Enter Address Line 1"
              />
              {billingAddressFormik.errors.addressLine2 &&
              billingAddressFormik.touched.addressLine2 ? (
                <small className="text-red-500">
                  {billingAddressFormik.errors.addressLine2}
                </small>
              ) : null}
            </div>
            <div className="flex gap-3">
              <div className="my-3">
                <PrimaryInput
                  type="text"
                  name="city"
                  value={billingAddressFormik.values.city}
                  onBlur={billingAddressFormik.handleBlur}
                  onChange={billingAddressFormik.handleChange}
                  placeholder="Enter town/city"
                />
                {billingAddressFormik.errors.city &&
                billingAddressFormik.touched.city ? (
                  <small className="text-red-500">
                    {billingAddressFormik.errors.city}
                  </small>
                ) : null}
              </div>
              <div className="my-3">
                <PrimaryInput
                  type="text"
                  name="postalCode"
                  value={billingAddressFormik.values.postalCode}
                  onBlur={billingAddressFormik.handleBlur}
                  onChange={billingAddressFormik.handleChange}
                  placeholder="Enter postal code"
                />
                {billingAddressFormik.errors.postalCode &&
                billingAddressFormik.touched.postalCode ? (
                  <small className="text-red-500">
                    {billingAddressFormik.errors.postalCode}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="my-3">
              <PrimaryInput
                type="email"
                name="email"
                value={billingAddressFormik.values.email}
                onBlur={billingAddressFormik.handleBlur}
                onChange={billingAddressFormik.handleChange}
                placeholder="Enter your email"
              />
              {billingAddressFormik.errors.email &&
              billingAddressFormik.touched.email ? (
                <small className="text-red-500">
                  {billingAddressFormik.errors.email}
                </small>
              ) : null}
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 bg-brandColor01 text-white cursor-pointer block ml-auto"
                type="submit"
                value="Save Changes"
              />
            </div>
          </form>

          <form
            className="w-full mt-5 lg:mt-0"
            onSubmit={shippingAddressFormik.handleSubmit}
          >
            <h3 className="text-lg font-semibold mb-6">Shipping Address</h3>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="firstName"
                value={shippingAddressFormik.values.firstName}
                onBlur={shippingAddressFormik.handleBlur}
                onChange={shippingAddressFormik.handleChange}
                placeholder="Enter first name"
              />
              {shippingAddressFormik.errors.firstName &&
              shippingAddressFormik.touched.firstName ? (
                <small className="text-red-500">
                  {shippingAddressFormik.errors.firstName}
                </small>
              ) : null}
            </div>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="lastName"
                value={shippingAddressFormik.values.lastName}
                onBlur={shippingAddressFormik.handleBlur}
                onChange={shippingAddressFormik.handleChange}
                placeholder="Enter last name"
              />
              {shippingAddressFormik.errors.lastName &&
              shippingAddressFormik.touched.lastName ? (
                <small className="text-red-500">
                  {shippingAddressFormik.errors.lastName}
                </small>
              ) : null}
            </div>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="addressLine1"
                value={shippingAddressFormik.values.addressLine1}
                onBlur={shippingAddressFormik.handleBlur}
                onChange={shippingAddressFormik.handleChange}
                placeholder="Enter address line 1"
              />
              {shippingAddressFormik.errors.addressLine1 &&
              shippingAddressFormik.touched.addressLine1 ? (
                <small className="text-red-500">
                  {shippingAddressFormik.errors.addressLine1}
                </small>
              ) : null}
            </div>
            <div className="my-3">
              <PrimaryInput
                type="text"
                name="addressLine2"
                value={shippingAddressFormik.values.addressLine2}
                onBlur={shippingAddressFormik.handleBlur}
                onChange={shippingAddressFormik.handleChange}
                placeholder="Enter address line 2"
              />
              {shippingAddressFormik.errors.addressLine2 &&
              shippingAddressFormik.touched.addressLine2 ? (
                <small className="text-red-500">
                  {shippingAddressFormik.errors.addressLine2}
                </small>
              ) : null}
            </div>
            <div className="flex gap-3">
              <div className="my-3">
                <PrimaryInput
                  type="text"
                  name="city"
                  value={shippingAddressFormik.values.city}
                  onBlur={shippingAddressFormik.handleBlur}
                  onChange={shippingAddressFormik.handleChange}
                  placeholder="Enter town/city"
                />
                {shippingAddressFormik.errors.city &&
                shippingAddressFormik.touched.city ? (
                  <small className="text-red-500">
                    {shippingAddressFormik.errors.city}
                  </small>
                ) : null}
              </div>
              <div className="my-3">
                <PrimaryInput
                  type="text"
                  name="postalCode"
                  value={shippingAddressFormik.values.postalCode}
                  onBlur={shippingAddressFormik.handleBlur}
                  onChange={shippingAddressFormik.handleChange}
                  placeholder="Enter postal code"
                />
                {shippingAddressFormik.errors.postalCode &&
                shippingAddressFormik.touched.postalCode ? (
                  <small className="text-red-500">
                    {shippingAddressFormik.errors.postalCode}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 bg-brandColor01 text-white cursor-pointer block ml-auto"
                type="submit"
                value="Save Changes"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
