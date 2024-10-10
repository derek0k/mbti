import { useNavigate } from "react-router-dom";
import TestForm from "../components/TestForm";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResult";
import { useUserStore } from "../store/userStore";

export default function TestPage() {
  const navigate = useNavigate();

  const { user } = useUserStore();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    try {
      await createTestResult(resultData);
      navigate("/results");
    } catch (err) {
      console.error("테스트 페이지에서 에러 발생: ", erorr);
      alert("테스트 결과 제출 중 오류가 발생했습니다. 다시 시도해주세요");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
}
