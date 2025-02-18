// write the component code here
import React from "react";

const Usercard = () => {
  const profilePhoto = "https://th.bing.com/th/id/OIP.DMmiz4pxtbeuPq5k8AQmlwHaGT?rs=1&pid=ImgDetMain";
  const name = "ishita gupta";
  const email = "ishita.g@example.com";
  const phone = "+91 234 567 8923";
  const address = "123 Main Street, City, Country";

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4 border border-gray-200">
      <img className="w-24 h-24 rounded-full mx-auto" src={profilePhoto} alt="Profile" />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;