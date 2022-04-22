import "./Todo.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./../../store/todoSlice/todoSlice";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {

	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const handleAddTodo = () => {
		if (text.trim().length) {
			dispatch(addTodo({ text }));
			setText('');
		}
	};

	return (
		<div className="Component">
			<TodoInput
				value={text}
				handleInput={setText}
				handleSubmit={handleAddTodo}
			/>
			<TodoList />
		</div>
	);
}

export default Todo;