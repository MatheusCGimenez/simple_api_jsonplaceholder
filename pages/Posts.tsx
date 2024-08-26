import axios from "axios";

// styles
import styles from "./Posts.module.css";

// hooks
import { useEffect, useState } from "react";

// interfaces
interface IPosts {
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Ocorreu um erro ao carregar as postagens.");
        console.error(err);
      }
    };
    getPosts();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>POSTS</h1>
      {posts.length > 0 ? (
        <div className={styles.post}>
          {posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <textarea readOnly value={post.body} />
            </div>
          ))}
        </div>
      ) : (
        <h1>Não há postagens para exibir.</h1>
      )}
    </div>
  );
};

export default Posts;
