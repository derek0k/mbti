import { useEffect } from "react";
import Header from "./Header";

const Layout = ({ children, user, setUser }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header setUser={setUser} user={user} />
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
