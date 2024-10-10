import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResult";
import TestResultList from "../components/TestResultList";
import { useUserStore } from "../store/userStore";

export default function TestResultPage() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useUserStore();

  const fetchResults = async () => {
    try {
      const data = await getTestResults();
      setResults(data);
    } catch (err) {
      setError();
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = () => {
    fetchResults();
  };

  const handleDelete = () => {
    fetchResults();
  };

  useEffect(() => {
    fetchResults();
  }, []);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <div className="w-full flex flex-col items-center justify-center shadow-lg rounded-lg p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-primary-color mb-6 text-center">
          모든 테스트 결과
        </h1>
        <TestResultList
          results={results}
          user={user}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
