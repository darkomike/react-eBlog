import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("ama");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory(); 

  const handleSubmit = (event) => { 


      event.preventDefault();
      const blog ={title, body , author};
    
      console.log("Blog", blog);
      fetch("http://localhost:8000/blogs", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(blog)
      }).then((res)=> {
          console.log("New Blog Added");
          setIsPending(false);
        //   history.go(-1);
        
        history.push('/');

      });

  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Blog body</label>
        <textarea value={body} onChange={(event)=> setBody(event.target.value)} required></textarea>
        <label>Blog author: </label>
        <select value={author} onChange={(event) => setAuthor(event.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="ama">ama</option>
          <option value="mike">mike</option>
        </select>
        <br />
        {!isPending &&  <button >Add Blog</button>}
        {isPending &&  <button disabled >Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
