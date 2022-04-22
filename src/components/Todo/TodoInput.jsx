
const TodoInput = ({ value, handleInput, handleSubmit }) => {
	return (
		<label>
			<input value={value} onChange={(e) => handleInput(e.target.value)} placeholder="Type some todo..." />
			<button onClick={handleSubmit}>+</button>
		</label>
	);
}

export default TodoInput;