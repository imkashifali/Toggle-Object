import { useState } from 'react';
import { data } from './data'
import List from './list'
function Cruds() {
    const [students, setstudents] = useState(data);

    const [errorMsg, seterrorMsg] = useState('');
    const [name, setname] = useState('');
    const [classname, setclassname] = useState('');
    const [batch, setbatch] = useState('');
    const [roll, setroll] = useState('');
    const [flag, setflag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)



    const sumitHandler = () => {
        seterrorMsg('');

        if (name !== '' && classname !== '' && batch !== '' && roll !== '') {

            let student = {
                name,
                classname,
                batch,
                roll
            }
            console.log(student);

            setstudents([...students, student]);

            setname('');
            setclassname('');
            setbatch('');
            setroll('');
        } else {
            seterrorMsg('data not here');
        }

    }


    // delete for name base
    // const deleteRecord = (stuName) => {
    //     console.log('name', stuName);

    //    let studentDelete = students.filter((student) => {
    //         if (student.name !== stuName) {
    //             return student;
    //         }
    //     })
    //     setstudents([...studentDelete]);
    //     console.log('studentDelete', studentDelete);
    // }

    //delete for index
    const deleteRecord = (index) => {
        console.log('name', index);

        let studentDelete = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        })
        setstudents([...studentDelete]);
        console.log('studentDelete', studentDelete);
    }

    const updateRecord = (student, index) => {
            console.log('student update', student);

            setUpdatedIndex(index);
            setname(student.name);
            setclassname(student.classname);
            setbatch(student.batch);
            setroll(student.roll);
            setflag(true);
    }
    
   



    const updatedHandler = () => {
        seterrorMsg('');

        if (name !== '' && classname !== '' && batch !== '' && roll !== '') {

            let student = {
                name,
                classname,
                batch,
                roll
            }
            console.log(student);

            let updatedStudent = students.map((stud, index) => {
                if (updatedIndex === index) {
                    return student;

                } else {
                    return stud;
                }
            })

            setstudents([...updatedStudent]);

            setname('');
            setclassname('');
            setbatch('');
            setroll('');
            setflag(false);

        } else {
            seterrorMsg('data not here');
        }

    }

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
                        return <List index={index} student={student} deleteRecord={deleteRecord} updateRecord={updateRecord} />
                    })
                }

            </table>
        </div>
    )
}

export default Cruds
