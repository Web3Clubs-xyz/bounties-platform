import BountyList from "@/components/common/bounty_list";
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";
import Stats from "@/components/common/stats/stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectsPage = () => {
  return (
    <div className="min-h-full">
      <div className="bg-gradient-to-r from-[#6366F1] to-[#A551F9] pb-32">
        <Nav />
        <header className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Projects
            </h1>
            <div>
              <Stats />
            </div>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          {/* Your content */}
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            <div>
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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
