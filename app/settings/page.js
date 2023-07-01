import PrimaryInput from "@/components/PrimaryInput/PrimaryInput";

const page = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="relative h-full">
      <h2 className="text-xl font-semibold">Account</h2>
      <div className="border rounded-2xl p-6 mt-5">
        <h3 className="text-lg font-semibold mb-6">Personal information</h3>
        <div className="flex items-center gap-4">
          <img
            className="w-20 h-20 object-cover rounded-xl"
            src="/assets/pizzalicious-hero-avatar-image.png"
            alt=""
          />
          <button className="border border-brandColor01 px-5 py-3 rounded-xl text-brandColor01 font-semibold">
            Change
          </button>
          <button className="text-gray-400 font-semibold">Remove</button>
        </div>

        <div className="flex gap-5 mt-4">
          <div className="w-full">
            <p className="text-brandColor04">First name</p>
            <PrimaryInput
              type="text"
              placeholder="Enter first name"
              name="firstName"
            />
          </div>
          <div className="w-full">
            <p className="text-brandColor04">Last name</p>
            <PrimaryInput
              type="text"
              placeholder="Enter last name"
              name="lastName"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-7">
          <div className="w-full">
            <p className="text-brandColor04">Email</p>
            <PrimaryInput
              type="text"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="w-full">
            <p className="text-brandColor04">Phone</p>
            <PrimaryInput
              type="text"
              placeholder="Enter phone number"
              name="phone"
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
