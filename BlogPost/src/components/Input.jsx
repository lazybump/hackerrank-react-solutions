function Input({ userInput, setUserInput }) {
  const handleChange = (e, field) => {
    setUserInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input
        className="w-100"
        type="text"
        placeholder="Enter Title"
        data-testid="title-input"
        value={userInput.title}
        onChange={(e) => handleChange(e, "title")}
      />
      <textarea
        className="mt-10 w-100"
        placeholder="Enter Description"
        data-testid="description-input"
        value={userInput.description}
        onChange={(e) => handleChange(e, "description")}
      />
    </div>
  );
}

export default Input;
