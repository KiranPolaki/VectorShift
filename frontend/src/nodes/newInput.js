import { AbstractionNode } from "./abstractionNode";
export function NewInput({ id, data }) {
  return (
    <>
      <AbstractionNode
        id={id}
        data={data}
        label={"Input"}
        enableInputOutput={true}
      />
    </>
  );
}
