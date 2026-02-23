import { useState } from 'react'
import './App.css'
// import { set } from 'mongoose';

function App() {
 //Aquí tu código

 const [name, setName] = useState('Sofía');
 const [newName, setNewName] = useState('');


// ESTO ES PARA EL NO BONUS
// const changeName = (selectedName) => {
//     return setName(selectedName)
// }

// BONUS

const changeName = (event) => {
    event.preventDefault()
    if (!newName) {
        return
    }
    setName(newName);
    setNewName('');
}
    return(
        <div>
            {/* <h2>Teacher's name: {name}</h2>
            <ul>
                <li key="Data" onClick={() => changeName('Data')}>Data</li>
                <li key="Reyes" onClick={() => changeName('Reyes')}>Reyes</li>
                <li key="Soraya" onClick={() => changeName('Soraya')}>Soraya</li>
            </ul> */}


            {/* PARA BONUS AQUI ABAJO*/}
            <h2>Teacher's name: {name}</h2>
            <form onSubmit={changeName}>
                <input type="text" value={newName} onChange={(event) => {
                    setNewName(event.target.value);
                    }} placeholder='add a name'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )

}

export default App
