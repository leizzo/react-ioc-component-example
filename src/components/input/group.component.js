import { useCallback, useState } from "react";

export function Group({ children }) {
  const [inputValue, setInputValue] = useState("test-input");

  const onSend = useCallback(() => {
    console.log("group Component", inputValue);
  }, [inputValue]);

  return <div>{children({ value: inputValue, setInputValue, onSend })}</div>;
}
