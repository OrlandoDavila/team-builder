import React, { useState, useEffect} from 'react';
import './App.css';
import FormsData from './Forms'
import {v4 as uuid} from 'uuid'
import TeamMembers from './Teams'

const initialFriendsList = [
  {
    id: uuid(), 
    name: 'Orlando',
    email: 'oly@oly.com',
    role: 'Student',
  },
  {
    id: uuid(), 
    name: 'Sam',
    email: 'sam@samFam.com',
    role: 'Team Lead',
  },
  
]

const formslist =[{
  name:'',
  email:'',
}]

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, 
    success: true, 
    data: initialFriendsList })
}
const fakeAxiosPost = (url, { name, email, }) => {
  const newFriends = { id: uuid(), name, email,}
  return Promise.resolve({ status: 200, 
    success: true, 
    data: newFriends })
}

export default function App() {
  const [friends, setFriends] = useState([initialFriendsList]) 


  const [formValues, setFormValues] = useState(formslist) 

  const updateForm = (inputName, inputValue) =>{
    const updatedFormValues = {...formValues, [inputName]:inputValue}
    setFormValues(updatedFormValues) 
  }

  const submitForm = () => {
    const newFriends = {
      name: formValues.name,
      email: formValues.email,
      //role: formValues.role,
    }
    console.log(newFriends);
    if (!newFriends.name || !newFriends.email || !newFriends.role) return
  
    fakeAxiosPost('fakeapi.com', newFriends)
      .then(res => {
        const friendFromApi = res.data
        setFriends([friendFromApi, ...friends ])
        
        setFormValues(formslist)
      })

  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setFriends(res.data))
  }, [])

        return(
          <div>

          <FormsData          
            values={formslist}
            update = {updateForm}
            submit = {submitForm} 
          />
        
          {
           friends.map(forms => {
             return( 
              <TeamMembers key={forms.id} members={forms} />
            )
          })
         } 
      </div>
      )
    }

// return (
//   <div className="App">
//     <header className="App-header">
//       {friends.map(items => {
//        return <TeamMembers key = {items.id} members = {items}/>
//       })}
//       <FormsData values = {formslist} update ={updateForm} submit = {submitForm}/>
//     </header>
//   </div>
// );
// }