"use client";

import { Disclosure, DisclosureButton } from '@headlessui/react'
import React from 'react'
import NavLinks from './nav-links'
import Search from '../search/search'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/20/solid'
import ProfileMenu from '../menu/profile-menu'
import MainProfile from '../menu/main-profile'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/images/logo.svg'

const Nav = () => {
  return (
    <div>
       <Disclosure
            as="nav"
            className="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none"
          >
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <Link href="/" className="flex-shrink-0">
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
                    <Search/>
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
                        <button
                          type="button"
                          className="flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <ProfileMenu />
                      </div>
                    </div>
                  </div>
                </div>

              <MainProfile/>
              </>
            )}
          </Disclosure>
    </div>
  )
}

export default Nav
