import BountyList from "@/components/common/bounty_list";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bounty } from "@/features/listings";
import { Default } from "@/layouts/Default";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface Listings {
  bounties?: Bounty[];
  total?: number;
}

const BountiesPage = () => {
  const [isListingsLoading, setIsListingsLoading] = useState(true);
  const [listings, setListings] = useState<Listings>({
    bounties: [],
    total: 0,
  });
  const [activeTab, setActiveTab] = useState("open");
  const [filteredBounties, setFilteredBounties] = useState<Bounty[]>([]);

  console.log("listings", listings.bounties);
  console.log("filteredBounties", filteredBounties);

  const getListings = async () => {
    setIsListingsLoading(true);
    try {
      const listingsData = await axios.get("/api/listings/", {
        params: {
          category: 'bounties',
          type: 'bounty',
          take: 100,
        },
      });
      console.log("listingsData", listingsData.data);
      setListings(listingsData.data);
      setIsListingsLoading(false);
    } catch (e) {
      setIsListingsLoading(false);
    }
  };

  useEffect(() => {
    getListings();
  }, []);

  const filterBounties = (status: string, bounties: Bounty[]) => {
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


  useEffect(() => {
    if (listings.bounties) {
      const filtered = filterBounties(activeTab, listings.bounties);
      setFilteredBounties(filtered);
    }
  }, [activeTab, listings.bounties]);

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
