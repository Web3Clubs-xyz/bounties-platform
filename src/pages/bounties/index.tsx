import BountyList from "@/components/common/bounty_list";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bounty } from "@/features/listings";
import { Default } from "@/layouts/Default";
import axios from "axios";
import { useEffect, useState } from "react";

interface Listings {
  bounties?: Bounty[];
}

const BountiesPage = () => {

  const [isListingsLoading, setIsListingsLoading] = useState(true);
  const [listings, setListings] = useState<Listings>({
    bounties: [],
  });

  const getListings = async () => {
    setIsListingsLoading(true);
    try {
      const listingsData = await axios.get('/api/listings/', {
        params: {
          category: 'bounties',
          type: 'bounty',
          take: 100,
        },
      });
      setListings(listingsData.data);
      setIsListingsLoading(false);
    } catch (e) {
      setIsListingsLoading(false);
    }
  };

  useEffect(() => {
    if (!isListingsLoading) return;
    getListings();
  }, []);

  return (
    <Default>
      <div className="">
        <div>
          <Stats />
        </div>
        <Tabs defaultValue="open" className="w-full">
          <TabsList>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="in_review">In Review</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="open">
            <BountyList />
          </TabsContent>
          <TabsContent value="in_review">
            <BountyList />
          </TabsContent>
          <TabsContent value="completed">
            <BountyList />
          </TabsContent>
        </Tabs>
      </div>
    </Default>
  );
};

export default BountiesPage;
