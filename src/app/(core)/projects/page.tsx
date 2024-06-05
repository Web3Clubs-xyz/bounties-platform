"use client";

import BountyList from "@/components/common/bounty_list";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsPage = () => {
  return (
    <div className="min-h-full">
      

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {/* Your content */}
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div>
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
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default ProjectsPage;
