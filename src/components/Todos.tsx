import { useSelector } from "react-redux";

interface todoStruct {
  id: string;
  text: string;
}
interface StateStruct {
  todos: todoStruct[];
}

export default function Todos() {
  const todos = useSelector((state: StateStruct) => state.todos);
  return (
    <>
      <div>Todos</div>
      <div>
        {todos.map((todo: todoStruct, idx) => {
          return (
            <div key={todo.id} className='flex flex-row gap-2'>
              <li key={idx} className="bg-green-100 p-4  rounded-lg hover:bg-green-300" >{todo.text}</li>
              <button className="bg-yellow-400 p-2 rounded-lg hover:bg-yellow-200">delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
