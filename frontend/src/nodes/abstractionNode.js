import { Position } from "reactflow";
import { useInput } from "../hooks/useInput.jsx";
import { InputField } from "../components/InputField.jsx";
import SelectField from "../components/SelectField.jsx";
import { Handles } from "../components/Handles.jsx";
import { Labels } from "../components/Labels.jsx";

export const AbstractionNode = ({ id, data }) => {
  const { currName, handleNameChange, inputType, handleTypeChange } = useInput({
    id,
    data,
  });

  const options = ["Text", "File"];

  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      <Labels label={"Input"} />

      <div>
        <InputField
          type={"textarea"}
          currName={currName}
          handleNameChange={handleNameChange}
        />
        <SelectField
          inputType={inputType}
          handleTypeChange={handleTypeChange}
          options={options}
        />
      </div>
      <Handles
        id={id}
        position={Position.Right}
        type={"source"}
        place={"center"}
      />
    </div>
  );
};
