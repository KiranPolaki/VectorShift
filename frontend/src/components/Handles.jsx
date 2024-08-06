import { Handle } from "reactflow";

export const Handles = ({ id, type, position, place }) => {
  const handleStyles = {
    top: { top: `${100 / 3}%` },
    bottom: { top: `${200 / 3}%` },
  };
  return (
    <>
      <Handle
        type={type}
        position={position}
        id={`${id}-value`}
        style={handleStyles[place] || {}}
      />
    </>
  );
};
