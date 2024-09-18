import React from "react";
import AuthForm from "../components/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile, login } from "../api/auth";
import { useUserStore } from "../store/userStore";

export default function LoginPage() {
  const navigate = useNavigate();

  const { setUser } = useUserStore();

  const handleLogin = async (formData) => {
    try {
      const { accessToken } = await login(formData);
      localStorage.setItem("accessToken", accessToken);

      const userProfile = await getUserProfile();
      setUser(userProfile);

      navigate("/");
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
