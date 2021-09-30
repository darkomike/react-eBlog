import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
 
    const {data:blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <h5>{error}</h5>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />} <br />
      {isPending && <h5>Loading blogs...</h5>}
    </div>
  );
};

export default Home;
