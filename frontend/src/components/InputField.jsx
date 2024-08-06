export const InputField = ({ type, currName, handleNameChange }) => {
  return (
    <>
      <label>
        Name:
        <input type={`${type}`} value={currName} onChange={handleNameChange} />
      </label>
    </>
  );
};
