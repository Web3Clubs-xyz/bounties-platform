import BountyList from "@/components/common/BountyList";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bounty } from "@/features/listings";
import { Default } from "@/layouts/Default";
import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Listings {
  bounties?: Bounty[];
  total?: number;
}

const fetchListings = async (): Promise<Listings> => {
  const response = await axios.get("/api/listings/", {
    params: {
      category: 'bounties',
      type: 'bounty',
      take: 100,
    },
  });
  return response.data;
};

const BountiesPage = () => {
  const [activeTab, setActiveTab] = useState("open");

  const { data: listings, isLoading: isListingsLoading } = useQuery(
   
   {
    queryKey: ['listings'], queryFn: fetchListings
   }
  );

  const filterBounties = (status: string, bounties: Bounty[] = []) => {
    switch (status) {
      case "open":
        return bounties.filter(
          (bounty) =>
            bounty.status === "OPEN" &&
            !dayjs().isAfter(dayjs(bounty.deadline)) &&
            !bounty.isWinnersAnnounced
        );
      case "in_review":
        return bounties.filter(
          (bounty) =>
            !bounty.isWinnersAnnounced &&
            dayjs().isAfter(dayjs(bounty.deadline)) &&
            bounty.status === "OPEN"
        );
      case "completed":
        return bounties.filter(
          (bounty) =>
            bounty.status === "CLOSED" ||
            ((bounty.isWinnersAnnounced || false) && bounty.status === "OPEN")
        );
      default:
        return [];
    }
  };

  const filteredBounties = filterBounties(activeTab, listings?.bounties);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Default>
      <div className="">
        <div>
          <Stats />
        </div>
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          defaultValue="open"
          className="w-full"
        >
          <TabsList>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="in_review">In Review</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="open">
            <BountyList
              bounties={filteredBounties}
              isListingsLoading={isListingsLoading}
              emptyTitle="No bounties available!"
              emptyMessage="Subscribe to notifications to get notified about announcements."
              checkLanguage
            />
          </TabsContent>
          <TabsContent value="in_review">
            <BountyList
              bounties={filteredBounties}
              isListingsLoading={isListingsLoading}
              emptyTitle="No bounties in review!"
              emptyMessage="Subscribe to notifications to get notified about announcements."
              checkLanguage
            />
          </TabsContent>
          <TabsContent value="completed">
            <BountyList
              bounties={filteredBounties}
              isListingsLoading={isListingsLoading}
              emptyTitle="No completed bounties!"
              emptyMessage="Subscribe to notifications to get notified about announcements."
              checkLanguage
            />
          </TabsContent>
        </Tabs>
      </div>
    </Default>
  );
};

export default BountiesPage;