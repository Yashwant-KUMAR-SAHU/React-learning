
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "yashwant",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card  username="username"/>

    </>
  )
}

export default App

