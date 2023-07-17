import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Amazing Quotes</span>
      </h1>
      <p className="desc text-center">
        Quotopia is an open-source Quote Collection for discovering, reading,
        and sharing awesome quotes
      </p>

      <Feed />
    </section>
  );
};

export default Home;
