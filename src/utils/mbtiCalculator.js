import { questions } from "../data/question";

const YES_ANSWER = "예";

const updateScores = (scores, type, answer) => {
  const [trait1, trait2] = type.split("/");
  if (answer === YES_ANSWER) {
    scores[trait1]++;
  } else {
    scores[trait2]++;
  }
};

const calculateResult = (scores) => {
  return `${scores.E >= scores.I ? "E" : "I"}${
    scores.S >= scores.N ? "S" : "N"
  }${scores.T >= scores.F ? "T" : "F"}${scores.J >= scores.P ? "J" : "P"}`;
};

export const calculateMBTI = (answers) => {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  answers.forEach((answer, index) => {
    const question = questions[index];
    updateScores(scores, question.type, answer);
  });

  const result = calculateResult(scores);

  return result;
};
