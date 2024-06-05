import { DisclosureButton } from "@headlessui/react";
import React from "react";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/signin" },
];

const UserNav = () => {
  return (
    <div>
      {userNavigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
        >
          {item.name}
        </DisclosureButton>
      ))}
    </div>
  );
};

export default UserNav;
