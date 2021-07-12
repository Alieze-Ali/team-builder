// importing useState
import React, { useState } from 'react'
// importing key id generator
import { v4 as uuid } from "uuid"

import logo from './logo.svg';
import './App.css';

// importing TeamMember & form components
import TeamMember from './TeamMember';
import Form from './Form';


// setting up a way to keep track of team member list & key/value pairs
const initialFormValues = {
  username: "",
  email: "",
  role: "",
}


function App() {
  // Step 1: setting up state & passing object from initialFormValues to set up a team member 
  const [teamMembers, setTeamMembers] = useState([{ username: "Thanos",
  email: "thanos@gmail.com",
  role: "Destructor",
  // creating id to be key below
  id: uuid(),
}])
  const [formValues, setFormValues] = useState(initialFormValues)
  // implementing form state updater attempt

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })

  }

  // submit function to update list of team members and add functionality to add new team member

const onSubmit = evt => {
  // stopping it from refreshing 
  evt.preventDefault();
  // storing info for new Members
  const newMember = {...formValues, id:uuid()
  }
  // adding new members plus adding a copy of all existing teamMembers, overriding current array so thats why it's in [] to create a whole new array 
  setTeamMembers([newMember, ...teamMembers
  ])

  // reset form values to initial form state
  // don't need a new object so no [], we can override our form values with initialFormValues in ()
  setFormValues(initialFormValues)

  // now need to connect this function to Form.js
}


  return (
    // need parent div to wrap render
    <div>
      {
        teamMembers.map(teamMember => {
        // need a return statement to render a new component on every iteration
        // don't forget to add key in app render
        return (
          <TeamMember teamMember={teamMember} key={teamMember.id}/>
        )
      })
        
    } 
    // rendering Form.js
    // needs props from Form.js
     <Form values={formValues} update={updateForm} submit={onSubmit} />
    </div>
  );
}

export default App;
