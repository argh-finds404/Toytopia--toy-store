import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faBox,
  faHeadset,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const ShopInfo = () => {
  const infos = [
    {
      icon: faTruck,
      title: "Express Delivery",
      subtitle: "Inside Dhaka",
    },
    {
      icon: faBox,
      title: "Free Return",
      subtitle: "365 A Day",
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      subtitle: "Online 24 hours",
    },
    {
      icon: faCreditCard,
      title: "Payment Method",
      subtitle: "Secure Online Payment",
    },
  ];

  return (
    <div className="max-w-11/12 mx-auto px-4">
      <div className="bg-[#faedcd] rounded-3xl py-2 sm:py-5 lg:py-4 px-5 sm:px-6 lg:px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
          {infos.map((info, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center p-5 relative`}
            >
              <div className="text-3xl text-[#023047] mb-2">
                <FontAwesomeIcon icon={info.icon} />
              </div>
              <h3 className="font-semibold text-base sm:text-lg">
                {info.title}
              </h3>
              <p className="text-gray-600 text-sm">{info.subtitle}</p>

              {/* ✅ Conditional Borders */}
              {/* Desktop: vertical divider (right side) */}
              {i !== infos.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-25 bg-gray-500"></div>
              )}
              {/* Mobile: horizontal divider (bottom) */}
              {i !== infos.length - 1 && (
                <div className="block md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-px bg-gray-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
