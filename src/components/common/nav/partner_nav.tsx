"use client";

import { Disclosure, DisclosureButton } from "@headlessui/react";
import React from "react";
import NavLinks from "./nav-links";
import Search from "../search/search";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/20/solid";
import ProfileMenu from "../menu/profile-menu";
import MainProfile from "../menu/main-profile";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/logo.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDisclosure } from "@chakra-ui/react";

const PartnerNav = () => {
 

  return (
    <div>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="max-w-7xl">
              <div className="relative flex ">
                <div className="">
                
                  <NavLinks />
                </div>
              
               
              </div>
            </div>

           </>
        )}
      </Disclosure>
    </div>
  );
};

export default PartnerNav;
