function SelectField({ inputType, handleTypeChange, options }) {
  return (
    <>
      <label>
        Type:
        <select value={inputType} onChange={handleTypeChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default SelectField;
