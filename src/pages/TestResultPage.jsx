import { useEffect, useState } from "react";
import { getTestResults } from "../api/testResult";
import TestResultList from "../components/TestResultList";

export default function TestResultPage({ user }) {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await getTestResults();
    setResults(data);
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
