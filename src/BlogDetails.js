import React from "react";
import { useParams , useHistory} from "react-router";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const handleDelete = () => {
        fetch("http://localhost:8000/blogs/"+blog.id, {
          method: "DELETE"
        });
        history.push('/');
  }

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {error && <h5>{error}</h5>}
      {isPending && <h5>Loading blogs...</h5>}
      {blog && (
        <article>
          <h2>{blog.title}</h2> <br />
          <p>Written by <b>{blog.author.toString()}</b></p> <br />
          <div>{blog.body}</div>
          <br />
          <button onClick={handleDelete}>Delete</button>
        </article>
        
      )}{" "}
    </div>
  );
};

export default BlogDetails;
