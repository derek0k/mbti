import { Link, useNavigate } from "react-router-dom";

export default function Header({ handleLogout }) {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <Link to="/">홈</Link>
        <div className="space-x-4">
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
