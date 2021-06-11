import React,{useState} from 'react'

const Testing = () => {
    const [num, setNum] = useState(0);
    const [users, setUsers] = useState([{name:"ali",age:32,country:"pak"}]
        );

    const submitdata = e =>{
     const user = {
            name:"zain",
            age:32,
            country:"aus"
        }
        setUsers([...users,user])
    }
    return (
        <div>

            {users.map((usr, index)=> {
                return(
                    <div key={index}>
                        <h2>{usr.name}-{usr.country}</h2>
                        <p>{usr.age}</p>

                    </div>
                )
            })}



          
            <div>{num}</div>
            <button onClick={()=> setNum(num+1)}>Increase</button>
            <button onClick={()=> setNum(num-1)}>Decrease</button> 
            <button onClick={submitdata}>add user</button>


        </div>
    )
}

export default Testing
