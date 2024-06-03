"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { DisclosureButton } from "@headlessui/react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const navigation = [
  { name: "Bounties", href: "/bounties", current: true },
  { name: "Projects", href: "/projects", current: false },
  { name: "Hackathons", href: "/hackathons", current: false },
];



export default function MobileNavLinks() {
  const pathname = usePathname();

  return (
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((link) => {
          return (
            <DisclosureButton
              key={link.name}
              as="a"
              href={link.href}
              className={clsx(
                "text-white hover:bg-indigo-500 hover:bg-opacity-75",
                "block rounded-md py-2 px-3 text-sm font-medium",
                {
                  "bg-indigo-700 text-white": pathname === link.href,
                }
              )}
            >
              {link.name}
            </DisclosureButton>
          );
        })}
      </div>
  );
}


