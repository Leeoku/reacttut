import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person)=>person.id !== id)
    setPeople(newPeople)
  }
  return <>
  {
    people.map((person)=>{
      const {id,name} = person
      return <div key={id} className="item">
        <h4>{id}{name}</h4>
        <button onClick={()=> removeItem(id)}>Remove Item</button>
      </div>
    })
  }
  <button className = "btn" onClick={() => setPeople([])}>Clear Item</button>
  </>
};

export default UseStateArray;
