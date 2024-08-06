// submit.js
import axios from "axios";

export const SubmitButton = () => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/pipelines/parse", {
        nodes: nodes,
        edges: edges,
      });
      const { num_nodes, num_edge, is_dag } = response.data;
      lert(`Pipeline Analysis:
        Number of nodes: ${num_nodes}
        Number of edges: ${num_edges}
        Is a DAG: ${is_dag ? "Yes" : "No"}`);
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
      <button type="submit">Submit</button>
    </div>
  );
};
