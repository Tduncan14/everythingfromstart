
import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useMemo,useCallback } from 'react';

import List, {Todo} from './List'


const initialTodo  = [
  {id:1,task: 'Go shopping'},
  {id:2, task:'Pay the electricity'}
]


function App(){

  const[todoList,setTodoList] = useState(initialTodo);
  const [task, setTask] = useState('');
  const[term,setTerm] = useState('');



  const handleSearch = () => {
    setTerm(task)
  }


  const filteredTodoList = todoList.filter((todo:Todo) => {

    console.log('filtering...')



    return todo.task.toLowerCase().includes(term.toLocaleLowerCase())

  })


  useEffect(() => {
    
    console.log(`Rendering <App />`)

  })


  const handleCreate = () => {

    const newTodo = {

      id: Date.now(),
      task
    }

    setTodoList([...todoList,newTodo])



     setTask('')

  }


  const handleDelete = useCallback((taskId: number) => {  const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId)
     setTodoList(newTodoList)}, [todoList])

return(
  <>
    <input 
     type="text"
     value={task}
     onChange={(e) => setTask(e.target.value)}

 />

   <button onClick={handleCreate}>Create</button>
   <button onClick={handleSearch}>Search</button>

   <List todoList = {todoList} handleDelete={handleDelete} />
  </>
)



}




export default App;
