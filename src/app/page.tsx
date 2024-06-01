
import Footer from "@/components/common/footer/footer";
import Nav from "@/components/common/nav/nav";

export default function Home() {
  return (
    <div className=''>
    
      <div className="min-h-full ">
        <div className="bg-indigo-600 pb-32">
         <Nav/>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Freelance Gigs
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {/* Your content */}
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
              Chizaa
              
              </div>
          </div>
        </main>

        <div>
            <Footer/>
          </div>
      </div>
    </div>
  );
}
