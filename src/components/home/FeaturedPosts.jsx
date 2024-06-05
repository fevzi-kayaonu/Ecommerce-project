import { Post } from "./Post";

export const FeaturedPosts = () => {
  const posts = [];
  for (let i = 0; i < 2; i++) {
    posts.push(<Post key={i} />);
  }

  return (
    <>
      <section className="flex justify-center py-12">
        <div className="flex flex-col justify-center w-[85%]">
          <div className="text-center py-16">
            <p className="font-normal text-sm py-1 text-primary">
              Practice Advice
            </p>
            <h2 className="font-bold text-4xl">Featured Posts</h2>
          </div>
          <div className="flex max-lg:flex-col justify-center items-center gap-10 ">
            {posts}
          </div>
        </div>
      </section>
    </>
  );
};
