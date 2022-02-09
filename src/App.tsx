import { useEffect, useState } from 'react'

import './App.css'
import { Counter } from './components/Counter'

type User = {
  id: number
  name: string
  avatar: string
}

type Todo = {
  id: number
  title: string
}

function App () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Nicolas')
  const [user, setUser] = useState<User | null>(null)
  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    setTimeout(() => {
      setUser({ id: 1, name: 'Nicolas', avatar: 'url.jpg' })

      const todos = [
        { id: 1, title: 'lol' },
        { id: 2, title: 'moo' }
      ]
      setTodos(todos)
    }, 5000)
  }, [])

  // if (user === null) return <h1>Loading...</h1>

  return (
    <div className='App'>
      <h1>{user ? `Welcome back ${user.name}!` : `Please sign in`}</h1>
      <Counter count={count} setCount={setCount} name='Nicolas' age={34} />
    </div>
  )
}

export default App
