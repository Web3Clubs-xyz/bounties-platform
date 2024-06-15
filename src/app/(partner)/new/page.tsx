import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const NewUserOnboardPage = () => {
  return (
    <div className="grid grid-cols-1 place-items-center space-y-4 md:grid-cols-2 md:space-y-0">
      <div className="w-full max-w-sm overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1505624198937-c704aff72608?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Looking for Talent?</div>
          <p className="pb-6 text-base text-gray-600">
            List a bounty, or grant for your project and find your next
            contributor..
          </p>
          <ul className="space-y-2">
            <li className="text-normal flex items-center text-gray-600">
              <CircleCheck className="mr-2 text-[#6366F1]" size={16} />
              Get in front of 1,000+ weekly visitors
            </li>
            <li className="text-normal flex items-center text-gray-600">
              <CircleCheck className="mr-2 text-[#6366F1]" size={16} />
              Instant listing creation through templates
            </li>
            <li className="text-normal flex items-center text-gray-600">
              <CircleCheck className="mr-2 text-[#6366F1]" size={16} />
              100% free
            </li>
          </ul>
        </div>
        <div className="w-full px-6 py-4">
          <Button variant="profile">Create your Partner Profile</Button>
        </div>
      </div>
      <div className="w-full max-w-sm overflow-hidden rounded shadow-lg">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1505624198937-c704aff72608?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Looking to earn?</div>
          <p className="pb-6 text-base text-gray-600">
            Create a profile to get notified when new earning opportunities get
            posted.
          </p>
          <ul className="space-y-2">
            <li className="text-normal flex items-center text-gray-800">
              <CircleCheck className="mr-2 text-[#6366F1]" size={16} />
              Start contributing to top crypto projects{" "}
            </li>
            <li className="text-normal flex items-center text-gray-800">
              <CircleCheck className="mr-2 text-[#6366F1]" size={16} />
              Build your on-chain resume
            </li>
            <li className="text-normal flex items-center text-gray-800">
              <CircleCheck className="mr-2 text-[#6366F1]" size={16} />
              Get paid in crypto
            </li>
          </ul>
        </div>
        <div className="w-full px-6 py-4">
          <Button variant="profile">Create your Talent Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default NewUserOnboardPage;
