import React from 'react'

export default function FormsData(props) {
    const { values, update, submit } = props

    const onChange = event => {
       const name = event.target.name
       const value = event.target.value
        console.log(name);
        console.log(value);
        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

return (
<form className= 'formContainer' onSubmit={onSubmit}>
    <div className="App">
      <h1>Team Builder</h1>
        <label htmlFor= 'name' className="lable"> Name:
        <input 
        name='name'
        type='text'
        placeholder='Name'
        id='name'
        maxLength='25'
        value={values.name}
        onChange={onChange}
        /><br />

        <label htmlFor= 'email' className="lable"> Email:
        <input 
        name='Email'
        type='email'
        placeholder='Email'
        id='Email'
        maxLength='25'
        value={values.email}
        onChange={onChange}

        /> <br />
        </label>


        <label htmlFor= 'lambdaSelect' className="lable">Lambda role:</label>
        <select id= 'lambdaSelect' name= 'role' onChange={onChange}>
          <option>Lambda Role?</option>
          <option value='student'>Student</option>
          <option value='teacher'>Teacher</option>
          <option value-='tl'>Team Lead</option>
        </select> <br />

        <button input='submit'>Submit</button>

        </label>
      </div>
    </form> 
  )
}


