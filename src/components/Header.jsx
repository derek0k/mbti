import { Link, useNavigate } from "react-router-dom";

export default function Header({ handleLogout, user }) {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="flex justify-between">
        <Link to="/">홈</Link>
        <div>
          {user ? (
            <>
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
