import axios from "axios";

// styles
import styles from "./Users.module.css";

// hooks
import { useEffect, useState } from "react";

// interfaces
interface IUser {
  name: string;
  username: string;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<IUser[] | undefined>([]);

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((result) => {
          setUsers(result.data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users?.length !== 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Apelido</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Nenhum usuário encontrado!</h1>
      )}
    </div>
  );
};

export default Users;
