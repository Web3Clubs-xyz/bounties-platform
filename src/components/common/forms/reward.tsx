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
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select</SelectLabel>
                <SelectItem value="apple">Select</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Input label="Total Reward Amount (in USDC)" inputType="total-usdc" />
        <Input label="Web3Clubs Service Fee" inputType="service-fee" />
        <Input label="First Prize" inputType="prize-fee" />
      </div>
    </article>
  );
};

export default Reward;
