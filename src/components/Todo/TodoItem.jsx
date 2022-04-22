import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../../store/todoSlice/todoSlice";

const TodoItem = ({ id, text, completed }) => {

	const dispatch = useDispatch();


	return (
		<li>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(completeTodo({ id }))}
			/>
			<span>{text}</span>
			<span onClick={() => dispatch(removeTodo({ id }))}>
				&times;
			</span>
		</li>
	);
}

export default TodoItem;