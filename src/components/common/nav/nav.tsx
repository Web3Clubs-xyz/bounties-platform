"use client";

import { Disclosure, DisclosureButton } from "@headlessui/react";
import React, { useEffect } from "react";
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
import { SignIn } from "@/features/auth/sign_in/signin";


const Nav = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  const {
    isOpen: isSearchOpen,
    onOpen: onSearchOpen,
    onClose: onSearchClose,
  } = useDisclosure();

  useEffect(() => {
    const checkHashAndOpenModal = () => {
      const hashHasEmail = window.location.hash === "#emailPreferences";
      if (hashHasEmail && status === "unauthenticated" && !session) {
        onLoginOpen();
      }
    };

    checkHashAndOpenModal();
  }, [isLoginOpen, onLoginOpen, status]);

  return (
    <>
      {/* {!!isLoginOpen && <SignIn isOpen={isLoginOpen} onClose={onLoginClose} />} */}

      <div className="">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                  <div className="flex items-center px-2 lg:px-0">
                    <Link href="/bounties" className="flex-shrink-0">
                      <Image
                        className="block h-24 w-24"
                        src={Logo}
                        alt="Web3Clubs Logo"
                        width={50}
                        height={50}
                      />
                    </Link>
                    <NavLinks />
                  </div>
                  <Search isOpen={isSearchOpen} onClose={onSearchClose} />
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </DisclosureButton>
                  </div>
                  <div className="hidden lg:ml-4 lg:block">
                    <div className="flex items-center">
                      {/* <button
                          type="button"
                          className="flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button> */}

                      {/* Profile dropdown */}
                      {/* <ProfileMenu /> */}

                      {/* { (
                        <div className="flex-shrink-0 items-center space-x-2">
                          <Button
                            onClick={() => {
                              router.push("/partners");
                            }}
                            className="flex-shrink-0 rounded-full p-1 text-white"
                          >
                            Create a Bounty
                          </Button>
                          <ProfileMenu />
                        </div>
                      )} */}

                      { (
                        <div className="flex-shrink-0 items-center space-x-2">
                          <Button
                            onClick={() => {
                              router.push("/partner");
                            }}
                            variant="link"
                            className="flex-shrink-0 rounded-full p-1 text-white"
                          >
                            Create a Bounty
                          </Button>
                          {/* <Button
                            onClick={() => {
                              onLoginOpen();
                            }}
                            variant="login"
                          >
                            Log In
                          </Button> */}
                          <SignIn/>
                          <Button
                            onClick={() => {
                              onLoginOpen();
                            }}
                            variant="login"
                          >
                            Sign up
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <MainProfile
                onLoginOpen={onLoginOpen}
                onSearchOpen={onSearchOpen}
              />
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Nav;
