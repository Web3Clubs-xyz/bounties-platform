import React from "react";
import MobileNavLinks from "../nav/mobile-nav";
import { DisclosurePanel } from "@headlessui/react";
import MobileProfileMenu from "./mobile-profile-menu";
import { BellIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

interface Props {
  onLoginOpen: () => void;
}

const MainProfile = ({ onLoginOpen }: Props) => {
  const router = useRouter();

  return (
    <DisclosurePanel className="lg:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <MobileNavLinks />
      </div>
      <div className="border-t border-indigo-700 py-3 px-4 ">
        <div className="flex flex-col items-start space-y-3">
          <Button
            onClick={() => {
              router.push("/partners");
            }}
            className="flex-shrink-0 rounded-full p-1 text-white"
          >
            Create a Bounty
          </Button>
          <Button
            onClick={() => {
              onLoginOpen();
            }}
            variant="login"
          >
            Log In
          </Button>
          <Button
            onClick={() => {
              onLoginOpen();
            }}
            variant="login"
          >
            Sign up
          </Button>
        </div>
      </div>
    </DisclosurePanel>
  );
};

export default MainProfile;
