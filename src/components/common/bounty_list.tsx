import Image from "next/image";
import React from "react";
import UsdcLogo from '/public/images/usdc.svg'
import { bountiesData } from "@/data/data";
import Link from "next/link";
import { Bounty, ListingCard, ListingCardSkeleton } from "@/features/listings";
import { Flex } from "@chakra-ui/react";
import { EmptySection } from "./EmptySection";

interface ContentProps {
  bounties?: Bounty[];
  take?: number;
  isListingsLoading: boolean;
  emptyTitle: string;
  emptyMessage: string;
  checkLanguage: boolean;
}

const BountyList = ({bounties,
  take,
  isListingsLoading,
  emptyTitle,
  emptyMessage,
  checkLanguage}: ContentProps) => {

    console.log("bounties", bounties)
  return (
    <Flex direction={'column'} rowGap={1}>
    {isListingsLoading ? (
      Array.from({ length: 8 }, (_, index) => (
        <ListingCardSkeleton key={index} />
      ))
    ) : bounties?.length  ? (
      bounties
        .slice(0, take)
        .map((bounty) => (
          <ListingCard
            key={bounty.id}
            bounty={bounty}
          />
        ))
    ) : (
      <Flex align="center" justify="center" mt={8}>
        <EmptySection title={emptyTitle} message={emptyMessage} />
      </Flex>
    )}
  </Flex>
  );
};

export default BountyList;
