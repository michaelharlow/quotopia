import QuoteCard from "./QuoteCard";
import QuoteCardSkeleton from "./QuoteCardSkeleton";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const posts =
    data.length > 0
      ? data.map((post) => (
          <QuoteCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))
      : [10, 2, 5, 3, 8, 12, 7, 6, 9].map((size, i) => (
          <QuoteCardSkeleton size={size} key={i} />
        ));

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="feed">
        <div className="quote_layout">{posts}</div>
      </div>
    </section>
  );
};

export default Profile;
