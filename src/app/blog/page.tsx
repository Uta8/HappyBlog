import PostCard from "@/components/molecules/card/PostCard";
import PostOverlayCard from "@/components/molecules/card/PostOverlayCard";
import PageInfo from "@/components/organism/pageInfo/PageInfo";

const BlogListing = () => {
  return (
    <main className="container mx-auto">
      <div>
        <section>
          <PageInfo />
        </section>
        <section className="my-12">
          <PostOverlayCard />
        </section>
        <section className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
              <PostCard key={item} />
            ))}
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <button className="btn btn-outline btn-secondary font-work px-5 text-base font-medium">
              Load More
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BlogListing;
