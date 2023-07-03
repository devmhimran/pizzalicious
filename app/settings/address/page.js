import React from "react";

const page = () => {
  return (
    <div className="relative h-full">
      <h2 className="text-xl font-semibold">Additional Information</h2>
      <div className="border rounded-2xl p-6 mt-5">
        <div className="block lg:flex gap-5 mt-4">
          <form className="w-full">
            <h3 className="text-lg font-semibold mb-6">Billing Address</h3>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="Address Line 1"
              />
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="Address Line 2"
              />
            </div>
            <div className="flex gap-3">
              <div className="my-3">
                <input
                  className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                  type="text"
                  placeholder="Town / City"
                />
              </div>
              <div className="my-3">
                <input
                  className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                  type="text"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 bg-brandColor01 text-white cursor-pointer block ml-auto"
                type="submit"
                value="Save Changes"
              />
            </div>
          </form>

          <form className="w-full mt-5 lg:mt-0">
            <h3 className="text-lg font-semibold mb-6">Shipping Address</h3>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="Address Line 1"
              />
            </div>
            <div className="my-3">
              <input
                className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                type="text"
                placeholder="Address Line 2"
              />
            </div>
            <div className="flex gap-3">
              <div className="my-3">
                <input
                  className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                  type="text"
                  placeholder="Town / City"
                />
              </div>
              <div className="my-3">
                <input
                  className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
                  type="text"
                  placeholder="Postal Code"
                />
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

export default page;
