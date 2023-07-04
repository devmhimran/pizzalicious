import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="lg:mt-10 mt-3">
      <div className="py-6 text-center bg-gray-700">
        <p className="text-gray-100 text-sm inter">
          Copyright ©{date.getFullYear()} Pizzalicious. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
