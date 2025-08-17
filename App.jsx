  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import Greeting from './components/Greeting'
  import MyButton from './components/MyButton'

  function App() {
    const [count, setCount] = useState(0)
    const [like, setLikeCount] = useState(0)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
      setInputValue(event.target.value)
    }

    const clearInput = () => {
        setInputValue('');
    }

    const [students, setStudents ] = useState([
      {id: 1, name: "Anas", age: 22},
      {id: 2, name: "nataku", age: 21},
      {id: 3, name: "taikobo", age: 71}
    ])

    const addStudent = () => {
      if (inputValue.trim() === ''){
        return;
      }
    

    const newStudent = {
      id: students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1,
      name: inputValue,
      age: 'N/A'
    }
  

    setStudents([...students, newStudent]);
    setInputValue('');

  }
    
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
        { /* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
 */ }
      <MyButton onClick={() => setCount((count) => count + 1)} text={`count is ${count}`}></MyButton>

     {/*     <button onClick={() => setLikeCount((like) => like + 1)}>
            You liked this {like} times 
          </button>
  */}
          <MyButton onClick={() => setLikeCount((like) => like + 1)} text={`You liked this ${like} times`}></MyButton>
          {/*Conditonal rendering starts here!*/}
          
          {like> 10 ? (
            <p style={{color: "green"}}>Wow, you really like this!</p> ) : (
            <p style={{color: "grey"}}>Keep liking to see a special message!</p>
          )}
  
          <input type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Please type something...'
          />

          <button onClick={clearInput}>Clear input</button>

{/* --- NEW BUTTON HERE --- */}
<MyButton onClick={addStudent} text="Add Student" />
{/* ------------------------- */}


  <p>
    You typed: <strong>{inputValue}</strong> {/*Displays the input field*/}
  </p>
      

          <Greeting name = "Anas"/>
          <Greeting name = "..."/>
          <Greeting name = "..."/>
          <Greeting name = {inputValue}/>

          <h2>Our students</h2>
          <ul>
            {students.map(student => (
              <li key={student.id}>
                {student.name} - {student.age}
              </li>
            ))}
          </ul>

          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }

  export default App
