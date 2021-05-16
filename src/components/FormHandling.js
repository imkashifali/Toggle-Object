import React from 'react'
import { useState} from 'react'

function FormHandling() {
    const [name, setname] = useState('');
    const [classname, setclassname] = useState('');
    const [batch, setbatch] = useState('');
    const [roll, setroll] = useState('');

    const sumitHandler= () => {
        let student = {
            name,
            classname,
            batch,
            roll
        }
        console.log(student)
    }
    return (
        <div>
            <input type='text' placeholder='name' onChange={(e)=>setname(e.target.value)} />
            <input type='text' placeholder='classname' onChange={(e)=>setclassname(e.target.value)} />
            <input type='text' placeholder='batch' onChange={(e)=>setbatch(e.target.value)} />
            <input type='text' placeholder='roll' onChange={(e)=>setroll(e.target.value)} />
            <button onClick={sumitHandler}>Submit</button>
            <p>{name}</p>
            <p>{classname}</p>
            <p>{batch}</p>
            <p>{roll}</p>


        </div>


    )
}

export default FormHandling
