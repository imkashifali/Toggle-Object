import React from 'react'

function list({student, index, deleteRecord, updateRecord}) {
   
    
    return (
        <div>
            <tr>
                <td>{index}</td>
                <td>{student.name}</td>
                <td>{student.classname}</td>
                <td>{student.batch}</td>
                <td>{student.roll}</td>
                <td>
                    <button onClick={()=> deleteRecord(index)}>aaDelete</button>
                </td>
                <td>
                    <button onClick={()=> updateRecord(student,index)}>update</button>
                </td>
            </tr>
        </div>
    )
}

export default list
