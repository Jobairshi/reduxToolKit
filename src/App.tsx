import "./App.css";
import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <h1 className="bg-red-200">reducx</h1>
      <AddTodo/>
      <Todos/>
      
    </>
  );
}

export default App;
