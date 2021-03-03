import axios from "axios";

export const fetchQuestions = async () => {
  const result = await axios.get(
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
  );
  return result;
};
