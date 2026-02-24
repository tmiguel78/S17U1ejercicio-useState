import { useState } from 'react'
import './App.css'

function App() {

 const [name, setName] = useState('Sofía');
 const [newName, setNewName] = useState('');

const changeName = () => {
    const text = newName.trim();
    if(text === "") {return}
    
    setName(text);
    setNewName('');
    alert(`el nuevo nombre es: ${text}`)
}

const handleChange = (e) => {
    console.log(e.target);
    setNewName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Cambiar nombre
    changeName();
  };
    return(
        <>
            <h2>Teacher's name: {name}</h2>
            <ul>
                <li key="Data" onClick={() => setName('Data')}>Data</li>
                <li key="Reyes" onClick={() => setName('Reyes')}>Reyes</li>
                <li key="Soraya" onClick={() => setName('Soraya')}>Soraya</li>
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" value={newName} onChange={handleChange} placeholder='add a name'/>
                <button type='submit'>Add</button>
            </form>
        </>
    )

}

export default App
