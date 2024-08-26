// styles
import styles from "./Navbar.module.css";

import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const local = useLocation();

  return (
    <nav className={styles.nav}>
      {local.pathname === "/" && (
        <>
          <NavLink to={"/users"}>Usuários</NavLink>
          <NavLink to={"/posts"}>Postagens</NavLink>
          <NavLink to={"/comments"}>Comentários</NavLink>
        </>
      )}
      {local.pathname === "/users" && (
        <>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/posts"}>Postagens</NavLink>
          <NavLink to={"/comments"}>Comentários</NavLink>
        </>
      )}
      {local.pathname === "/posts" && (
        <>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/users"}>Usuários</NavLink>
          <NavLink to={"/comments"}>Comentários</NavLink>
        </>
      )}
      {local.pathname === "/comments" && (
        <>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/users"}>Usuários</NavLink>
          <NavLink to={"/posts"}>Postagens</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
