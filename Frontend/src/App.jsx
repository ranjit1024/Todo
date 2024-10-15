import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[
        {
          title:"study dsa",
          descripition:"study dsa for 5 hours",
          completed:false
        }
      ]}></Todos>
    </div>
  )
}

export default App
