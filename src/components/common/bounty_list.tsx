import Image from "next/image";
import React from "react";
import UsdcLogo from '/public/images/usdc.svg'
import { bountiesData } from "@/data/data";
import Link from "next/link";


const BountyList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {bountiesData.map((bounty) => (
        <Link
          key={bounty.title}
          href={`/bounties/${bounty.id}`}
          className="relative flex items-start space-x-3 rounded-lg border border-gray-100 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-200"
        >
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src={bounty.partner_logo}
              alt="image"
            />
          </div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-normal font-medium text-gray-900">
                {bounty.title}
              </p>
              <p className="truncate text-sm text-gray-500">
                {bounty.category} | <span>{bounty.time}</span>
              </p>
            </a>
          </div>
          <div className="flex flex-col flex-end bg-[#4338CA]/10 p-2 rounded-md">
            <div className="flex items-center justify-center space-x-1">
                <div>
                    <Image alt="USDC" src={UsdcLogo}/>
                </div>
              <p className="text-sm font-medium text-[#4338CA] ">
                {bounty.bountyValue} USDC
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BountyList;
