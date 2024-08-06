// submit.js
import axios from "axios";
import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const handleSubmit = async () => {
    console.log(nodes, edges);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          nodes: nodes,
          edges: edges,
        }
      );
      //   const { num_nodes, num_edge, is_dag } = response.data;
      console.log(response.data);
      //   alert(`Pipeline Analysis:
      //       Number of nodes: ${num_nodes}
      //       Number of edges: ${num_edge}
      //       Is a DAG: ${is_dag ? "Yes" : "No"}`);
    } catch (error) {
      console.log(error);
      alert("An error occured while submittin the pipeline");
      // Can have a popup here/toast message?
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
};
