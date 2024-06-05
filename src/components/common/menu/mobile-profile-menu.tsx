import { DisclosureButton } from "@headlessui/react";
import React from "react";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/signin" },
];

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MobileProfileMenu = () => {
  return (
      <div className="mt-3 space-y-1 px-2">
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

export default MobileProfileMenu;
