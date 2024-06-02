import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import Input from "../inputs/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const BasicInput = () => {
  return (
    <article className="p-3">
      <div>
        <Input label="Listing Title" inputType="listing-title" />
        <Input label="Listing Slug" inputType="listing-slug" />
        <div className="mt-5">
          <label
            htmlFor=""
            className="block text-sm font-medium leading-6 text-gray-900 text-start"
          >
            Skills Needed
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

        <div className="mt-5">
          <label
            htmlFor=""
            className="block text-sm font-medium leading-6 text-gray-900 text-start"
          >
            Sub-Skills Needed
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

        <Input label="Point of Contact" inputType="point-of-contact" />
        <Input
          label="Deadline (in Africa/Nairobi)"
          inputType="deadline-in-africa"
        />
        <Input label="Referred By" inputType="referred-by" />
        <div className="flex items-center space-x-2 mt-3">
          <Label htmlFor="private-listing">Private Listing</Label>
          <Switch id="private-listing" />
        </div>
      </div>
    </article>
  );
};

export default BasicInput;
