import { useEffect } from "react";

export const useAutoSizeTextArea = (textArea, value) => {
  useEffect(() => {
    if (textArea) {
      const debounceResize = () => {
        textArea.style.height = "0px";
        const scrollHeight = textArea.scrollHeight;
        textArea.style.height = scrollHeight + "px";
      };

      const debounceTimeout = setTimeout(debounceResize, 100);

      return () => {
        clearTimeout(debounceTimeout);
      };
    }
  }, [textArea, value]);
};
