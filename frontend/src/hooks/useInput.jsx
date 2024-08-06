import { useState } from "react";

export const useInput = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };
  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return { currName, inputType, handleNameChange, handleTypeChange };
};
