import { useState } from "react";
import { updateProfile } from "../api/auth";
import { useUserStore } from "../store/userStore";

export default function ProfilePage() {
  const { user, setUser } = useUserStore();

  const [nickname, setNickname] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.nickname === nickname) {
      alert("기존 닉네임과 일치합니다");
      return;
    }
    if (!nickname.trim()) {
      alert("변경할 닉네임을 입력해 주세요");
      return;
    }

    try {
      const response = await updateProfile({ nickname });
      setUser({ ...user, nickname: response.nickname });
      alert("프로필이 성공적으로 변경되었습니다");
      setNickname("");
    } catch (e) {
      alert("닉네임 변경에 실패했습니다");
    }
  };

  return (
    <div>
      <h1>프로필 수정</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>닉네임</label>
          <input
            onChange={handleNicknameChange}
            value={nickname}
            placeholder={user.nickname || ""}
          />
        </div>
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
}
