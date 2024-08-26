import axios from "axios";
import { useEffect, useState } from "react";

// styles
import styles from "./Comments.module.css";

interface IComments {
  name: string;
  email: string;
  body: string;
}

const Comments = () => {
  const [comments, setComments] = useState<IComments[]>([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getComments();
  }, []);

  return (
    <div>
      <h1>COMMENTS</h1>
      {comments.length === 0 ? (
        <h1>Não há nenhum comentário.</h1>
      ) : (
        comments.map((comment, i) => (
          <div key={i} className={styles.details_container}>
            <div className={styles.details_name}>
              <p>{comment.name}</p>
            </div>
            <div className={styles.details_email}>
              <p>{comment.email}</p>
            </div>
            <div className={styles.details_body}>
              <p>{comment.body}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
