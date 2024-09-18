import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function Header() {
  const navigate = useNavigate();

  const { user, setUser } = useUserStore();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <header>
      <nav className="flex justify-between">
        <Link to="/">홈</Link>
        <div>
          {user ? (
            <>
              <div className="flex gap-2">
                <Link to="/results">히스토리</Link>
                <Link to="/test">테스트</Link>
                <Link to="/profile">프로필</Link>
              </div>
              <div>{user.nickname} 님</div>
              <button onClick={handleLogout}>로그아웃</button>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
