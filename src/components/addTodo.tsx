import  { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
export default function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    function addTodoHandler(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div>
        <form onSubmit={addTodoHandler} className='flex flex-row gap-2' action="">
            <input 
            required
            className='border-3 border-black p-3 bg-green-200 rounded-lg hover:bg-green-400'
            placeholder='Enter o Todo...'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text" />
            <button type='submit' className='bg-green-400 p-2 rounded-lg hover:bg-green-300'> Add Todo  </button>
        </form>
    </div>
  )
}
