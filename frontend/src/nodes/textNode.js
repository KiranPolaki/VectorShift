// textNode.js

import { useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import { useAutoSizeTextArea } from "../hooks/useAutoSizeTextArea";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  const textArea = useRef(null);

  useAutoSizeTextArea(textArea.current, currText);
  useEffect(() => {
    const pattern = /\{\{(\w+)\}\}/g;
    const matched = [...currText.matchAll(pattern)];
    setVariables(matched.map((match) => match[1]));
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{ width: 200, height: "auto", border: "1px solid black" }}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <textarea
            type="text"
            value={currText}
            onChange={handleTextChange}
            ref={textArea}
            rows={1}
          />
        </label>
      </div>
      {variables.map((variable, i) => (
        <Handle
          key={i}
          type="source"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: 20 + i * 10 }}
        />
      ))}
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
