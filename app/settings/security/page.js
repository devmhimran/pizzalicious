import React from "react";

const page = () => {
  return (
    <div className="relative h-full">
      <h2 className="text-xl font-semibold">Security</h2>
      <div className="border rounded-2xl p-6 mt-5">
        <h3 className="text-lg font-semibold mb-6">Reset your password</h3>

        <div className="flex gap-5 mt-4">
          <div className="w-full">
            <input
              className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
              type="text"
              placeholder="New Password"
            />
          </div>
          <div className="w-full">
            <input
              className="border rounded-lg p-3 w-full outline-none focus:border-brandColor01"
              type="text"
              placeholder="Confirm New Password"
            />
          </div>
        </div>

        <div className=" mt-10">
          <button className=" bg-brandColor01 px-5 py-3 rounded-xl text-white font-semibold block ml-auto">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
