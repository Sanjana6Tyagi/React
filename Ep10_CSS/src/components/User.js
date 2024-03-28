import {useState} from "react"
const User=(props)=>{
    const [count,setcount]=useState(0);
  const[count2,setCount2]=useState(1)
    return( <div className="user-card">
        <h1>count: {count}</h1>
        <h1>count: {count2}</h1>
        <h2>Name: {props.name}</h2>
        <h3>location:Bangalore</h3>
        <h4>Contact: sanjana2123</h4>

    </div>
    )
}

export default User;