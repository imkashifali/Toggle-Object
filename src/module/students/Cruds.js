import { useState } from 'react';
import { data } from './data'
import {useSelector} from 'react-redux'
export function Cruds() {
    const [students, setstudents] = useState(data);

    const [errorMsg, seterrorMsg] = useState('');
    const [name, setname] = useState('');
    const [classname, setclassname] = useState('');
    const [batch, setbatch] = useState('');
    const [roll, setroll] = useState('');
    const [flag, setflag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)

    //store data
    const state = useSelector(state => state.studentReducer);
    console.log('studentReducer state',state);

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

    return [students,errorMsg,name,classname,batch,roll,flag,updatedIndex, sumitHandler,deleteRecord,updateRecord,updatedHandler,setname,setclassname,setbatch,setroll]
       
    
}

