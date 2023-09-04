import { useState } from 'react'



function App() {
const [newItem, setnewItem]=useState("")
const {todos, setTodos}=useState([])

function handleSubmit(e){
  e.preventDefault()
  
  setTodos([...todos])
}

  return (
    <div>
      <form onsubmit={handleSubmit}className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input value= 'newItem' 
          type='text' id='item'/>
        </div>
        <button className='btn'>Add</button>

      </form>
      <h1 className='header'>To Do List</h1>
      <ul className='list'>
        <li>
          <label>
            <input type='checkbox'>
              Item 1
            </input>
            <button className='btn btn-danger'>Delete</button>
          </label>
        </li>

        <li>
          <label>
            <input type='checkbox'>
              Item 2
            </input>
            <button className='btn btn-danger'>Delete</button>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default App
