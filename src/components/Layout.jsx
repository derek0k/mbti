import { useEffect } from "react";
import Header from "./Header";

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ children, user }) => {
  // 이곳에서 로그인 하지 않은 사용자를 login 페이지로 보내줄 거에요.
  useEffect(() => {}, []);

  const handleLogout = () => {};

  return (
    <div>
      <Header handleLogout={handleLogout} user={user} />
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
