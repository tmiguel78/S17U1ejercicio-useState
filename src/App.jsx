import { useState } from 'react'
import './App.css'
// import { set } from 'mongoose';

function App() {
 //Aquí tu código

 const [name, setName] = useState('Sofía');
 const [newName, setNewName] = useState('');

const changeName = (selectedName) => {
    return setName(selectedName)
}
return(
    <div>
        <h2>Teacher's name: {name}</h2>
        <ul>
            <li key="Data" onClick={() => changeName('Data')}>Data</li>
            <li key="Reyes" onClick={() => changeName('Reyes')}>Reyes</li>
            <li key="Soraya" onClick={() => changeName('Soraya')}>Soraya</li>
        </ul>
    </div>
)

}

export default App
