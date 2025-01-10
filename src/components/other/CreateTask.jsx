import React, { useState } from 'react'

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [task, setTask] = useState({
    taskTitle : 'setTaskTitle', 
    taskDescription : setTaskDescription, 
    taskDate : setTaskDate, 
    category : setCategory, 
    asignTo : setAsignTo, 
    active: false, 
    newTask: true, 
    failed: true, 
    completed: false
  })

  const submitHandler = (e) => {
    e.preventDefault()
    setTask({taskTitle, taskDescription, taskDate, category, asignTo,active:false, newTask:true, failed:true, completed:false})
    console.log(task);
    
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex items-center justify-between w-full bg-[#1c1c1c] rounded-xl mt-9  '>
        <div className='p-5 '>

          <div className='p-2'>
            <h3>Task Title</h3>
            <input 
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value);
            }}
            type="text" 
            placeholder='Make a UI Design' 
            className='rounded-md w-[575px] bg-black border-2 w-[45vw]' />
          </div>

          <div className='p-2'>
            <h3>Date</h3>
            <input 
            value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value);
            }}
            type="date" 
            name="" 
            id="" 
            className='rounded-md w-[575px] bg-black border-2 w-[45vw]' />
          </div>

          <div className='p-2'>
            <h3>Assign To</h3>
            <input 
            value={asignTo}
            onChange={(e)=>{
              setAsignTo(e.target.value);
            }}
            type="text" 
            placeholder='Eployee Name' 
            className='rounded-md w-[575px] bg-black border-2 w-[45vw]' />
          </div>

          <div className='p-2'>
            <h3>Category</h3>
            <input 
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value);
            }}
            type="text" 
            placeholder='design, dev, etc' 
            className='rounded-md w-[575px] bg-black border-2 w-[45vw]' />
          </div>

        </div>

        <div className='p-5 '>

          <div>
            <h3>Description</h3>
            <textarea 
            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value);
            }}
            name="" 
            id="" 
            cols='80' 
            rows='10' 
            className='rounded-md bg-black border-2 w-[45vw] ' ></textarea>
          </div>

          <div>
            <button className='bg-emerald-600 w-full h-[40px] rounded-md mt-3 border-2 w-[45vw]'>Create Task</button>
          </div>

        </div>

      </form>
    </div>
  )
}

export default CreateTask