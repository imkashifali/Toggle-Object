import React from 'react'
import { useState} from 'react'
import {Cruds} from './Cruds'
import List from  '../students/list'
function FormHandling() {
    const [students,errorMsg,name,classname,batch,roll,flag,updatedIndex, sumitHandler,deleteRecord,updateRecord,updatedHandler,setname,setclassname,setbatch,setroll]= Cruds() ;


    return (
        <div>


        <input type='text' placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
        <input type='text' placeholder='classname' value={classname} onChange={(e) => setclassname(e.target.value)} />
        <input type='text' placeholder='batch' value={batch} onChange={(e) => setbatch(e.target.value)} />
        <input type='text' placeholder='roll' value={roll} onChange={(e) => setroll(e.target.value)} />

        {flag?
                    <button onClick={updatedHandler}>update</button>
                    :
                    <button onClick={sumitHandler}>Submit</button>

        }

        <p style={{ backgroundColor: 'red', color: 'white' }}>
            {errorMsg}
        </p>


        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Batch</th>
                <th>Roll</th>
                <th>Class</th>
            </tr>

            {
                students.map((student
                    , index) => {
                    return <List index={index}  student={student} deleteRecord={deleteRecord} updateRecord={updateRecord} />
                })
            }

        </table>
    </div>


    )
}

export default FormHandling
