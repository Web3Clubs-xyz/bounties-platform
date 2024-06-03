"use client";

import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import BasicInput from "@/components/common/forms/basic";
import Description from "@/components/common/forms/description";
import Reward from "@/components/common/forms/reward";

const steps = [
  {
    title: "Basic",
    content: <BasicInput />,
  },
  {
    title: "Description",
    content: <Description />,
  },
  {
    title: "Reward",
    content: <Reward />,
  },
];

const BountyForm: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div className="px-[200px]">
      <h3 className="text-center">Bounties</h3>
      <h4 className="text-center my-5 text-gray-700">
        A list of all the bounties and projects created
      </h4>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }} className="">
        {current < steps.length - 1 && (
          <>
            <button
              onClick={() => next()}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
            >
              Continue
            </button>
            <button
              type="submit"
              className="my-3 rounded-md border-2 border-indigo-600 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
            >
              Save to Drafts
            </button>
          </>
        )}
        {current === steps.length - 1 && (
          <button
            onClick={() => message.success("Processing complete!")}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
          >
            Submit Bounty for Review
          </button>
        )}
        {current > 0 && (
          <button
            type="submit"
            onClick={() => prev()}
            className="my-3 rounded-md border-2 border-indigo-600 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
};

export default BountyForm;
