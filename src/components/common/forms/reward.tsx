import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Input from "../inputs/input";

const Reward = () => {
  return (
    <article className="p-3">
      <div>
        <div className="mt-5">
          <label
            htmlFor=""
            className="block text-sm font-medium leading-6 text-gray-900 text-start"
          >
            Select Token
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Token" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select</SelectLabel>
                <SelectItem value="usdc">USDC</SelectItem>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="celo">CELO</SelectItem>
                <SelectItem value="usdt">USDT</SelectItem>
                <SelectItem value="stark">STARK</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Input label="Total Reward Amount (in USDC)" inputType="total-usdc" />
        <Input label="Web3Clubs Service Fee" inputType="service-fee" disabled={true} placeholder="10 USDC" />
        <Input label="First Prize" inputType="prize-fee" />
      </div>
    </article>
  );
};

export default Reward;
