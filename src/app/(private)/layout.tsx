import SideNav from "./_components/side-nav";
import SearchBar from "./_components/search-bar";
function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FBF9F9] w-full pt-10 px-5 sm:pe-20 sm:ps-8 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3">      
        <SideNav />
      </div>
      <div className="col-span-12 lg:col-span-9 mb-4 mt-7 lg:mt-0">
        <SearchBar />
        {children}
      </div>
    </div>
  );
}

export default Page;
