import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";
import Head from "next/head";

const Page = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };
  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <div className="relative ">
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

        <div className="flex gap-5 mt-5 mb-3">
          <div className="w-full">
            <PrimaryInput
              type="text"
              name="firstName"
              label="First Name"
              inputId="firstName"
              onBlur={handleChange}
            />
          </div>
          <PrimaryInput
            type="text"
            name="lastName"
            label="Last Name"
            inputId="lastName"
          />
        </div>
        <div className="block lg:flex gap-5 my-3">
          <PrimaryInput
            type="email"
            name="email"
            label="Email"
            inputId="email"
            onBlur={handleChange}
          />
          <PrimaryInput
            type="phone"
            name="phone"
            label="Phone"
            inputId="phone"
            onBlur={handleChange}
          />
        </div>
        <div className=" mt-10">
          <button className=" bg-brandColor01 px-5 py-3 rounded-md text-white font-semibold block ml-auto">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
