import { useState } from "react";
import { updateProfile } from "../api/auth";
import { useUserStore } from "../store/userStore";

export default function ProfilePage() {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const { user, setUser } = useUserStore();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({ nickname });
      setUser((user) => ({ ...user, nickname: response.nickname }));
      alert("프로필이 성공적으로 변경되었습니다");
    } catch (e) {
      alert("닉네임 변경에 실패했습니다");
    }
  };
  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
}
