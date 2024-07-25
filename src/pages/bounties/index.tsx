import BountyList from "@/components/common/bounty_list";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Default } from "@/layouts/Default";

const BountiesPage = () => {
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
