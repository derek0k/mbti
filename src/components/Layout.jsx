import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
