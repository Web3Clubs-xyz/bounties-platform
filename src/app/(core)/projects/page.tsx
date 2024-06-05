"use client";

import BountyList from "@/components/common/bounty_list";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsPage = () => {
  return (
    <>
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
    </>
  );
};

export default ProjectsPage;
