"use client";

import { Button } from "@/components/ui/button";
import { bountiesData } from "@/data/data";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";

const BountyDetailsPage = ({ params }: { params: { slug: string } }) => {
  console.log(params);

  function filterBountiesById(data: any, targetId: any) {
    return data.filter((item: any) => item.id === targetId);
  }

  const filteredBounties = filterBountiesById(
    bountiesData,
    Number(params.slug)
  );

  console.log(filteredBounties);

  return (
    <div className="min-h-full">
      <div className="bg-gradient-to-r from-[#6366F1] to-[#A551F9] pb-32">
        <Nav />
        <header className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              {filteredBounties[0].bounty_details.bounty_challenge}
            </h1>
            <div className="text-white py-4 flex space-x-4 items-center">
            <p className="text-xs">Bounty by {filteredBounties[0].partner_name}</p>
            <p className="bg-green-500/80 text-xs p-2 rounded-full">Submission Open</p>
          </div>
          </div>
         
        </header>
      </div>

      <main className="-mt-32 ">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {/* Your content */}
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div className="flex flex-col md:flex-row  md:space-x-4 md:space-y-0 space-y-6 mb-4 w-full">
              <div className="md:w-3/5 w-full h-full p-4 rounded-sm border border-gray-2">
                <div className="py-4">
                  <h3 className="font-bold py-2">About {filteredBounties[0].partner_name}</h3>
                  <p className="text-sm text-gray-500">
                    {filteredBounties[0].bounty_details.about_partner}
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-bold py-2">Bounty Challenge</h3>
                  <p className="text-sm text-gray-500">
                    {filteredBounties[0].bounty_details.bounty_challenge}
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-bold py-2">Submission Guidelines</h3>
                  <p className="text-sm text-gray-500">
                    Huddle01 is a decentralized physical infrastructure network
                    (DePIN) on a mission to democratize digital connectivity,
                    primarily audio and video conferencing. This decentralized,
                    people-powered network will deploy and co-ordinate unused
                    bandwidth resources from across the globe to enable seamless
                    digital connectivity between users while saving upto 95% on
                    server costs as compared to giants like AWS.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-bold py-2">Judging Criteria</h3>
                  <p className="text-sm text-gray-500">
                    {filteredBounties[0].bounty_details.judging_criteria}
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="font-bold py-2">Rewards</h3>
                  <div className="flex flex-col  space-y-2">
                    <div className="flex space-x-4  items-center text-normal">
                      <p className="text-gray-500">
                        <span>🥇</span> 1st Prize
                      </p>
                      <p className="font-bold">$ 300</p>
                    </div>
                    <div className="flex space-x-4 items-center text-normal">
                      <p className="text-gray-500">
                        <span className="">🥈</span> 2nd Prize
                      </p>
                      <p className="font-bold">$ 150</p>
                    </div>
                    <div className="flex space-x-4 items-center text-normal">
                      <p className="text-gray-500">
                        <span>🥉</span> 3rd Prize
                      </p>
                      <p className="font-bold">$ 50</p>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <h3 className="font-bold py-2">Terms & Conditions</h3>
                  <p className="text-sm text-gray-500">
                    Huddle01 is a decentralized physical infrastructure network
                    (DePIN) on a mission to democratize digital connectivity,
                    primarily audio and video conferencing. This decentralized,
                    people-powered network will deploy and co-ordinate unused
                    bandwidth resources from across the globe to enable seamless
                    digital connectivity between users while saving upto 95% on
                    server costs as compared to giants like AWS.
                  </p>
                </div>
              </div>
              <div className="md:w-2/5 w-full flex flex-col space-y-4 h-full rounded-sm">
                <div className="bg-gray-100 h-full py-6 p-2 flex flex-col space-y-4 rounded-md">
                  <p className="font-light text-sm">
                    A Developer&apos;s Intro to Huddle01 SDK + Ideas to Build
                  </p>
                  <p className="font-semibold text-sm">
                    Deadline: 30th May, 2025 12:00 UTC
                  </p>
                </div>

                <div className="bg-gray-100 h-full py-6 p-2 flex flex-col space-y-4 rounded-md">
                  <div>
                    <p className="text-sm font-bold">Total Prizes</p>
                    <p className="text-3xl font-bold">$ 500.00</p>
                  </div>

                  <div className="border-y-2 py-6 flex flex-row space-x-10">
                    <div className="flex flex-col  space-y-8">
                      <div className="flex flex-row space-x-10  items-center text-xl">
                        <p className="text-gray-500">
                          <span>🥇</span> 1st Prize
                        </p>
                        <p className="font-bold">$ 300</p>
                      </div>
                      <div className="flex justify-between items-center text-xl">
                        <p className="text-gray-500">
                          <span className="">🥈</span> 2nd Prize
                        </p>
                        <p className="font-bold">$ 150</p>
                      </div>
                      <div className="flex justify-between items-center text-xl">
                        <p className="text-gray-500">
                          <span>🥉</span> 3rd Prize
                        </p>
                        <p className="font-bold">$ 50</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full py-4">
                    <Button variant="primary" className="w-full">
                      Submit Bounty
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="py-10">Comments</h3>
                  <div className="flex flex-start space-x-2 w-full">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1505624198937-c704aff72608?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="image"
                      />
                    </div>
                    <form
                      className="w-full relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                      x-chunk="dashboard-03-chunk-1"
                    >
                      <Label htmlFor="message" className="sr-only">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                      />
                      <div className="flex items-center p-3 pt-0">
                        <Button
                          type="submit"
                          size="sm"
                          className="ml-auto gap-1.5"
                        >
                          Send Message
                          <CornerDownLeft className="size-3.5" />
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BountyDetailsPage;
