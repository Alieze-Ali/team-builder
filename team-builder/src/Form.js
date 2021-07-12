import React from 'react'

// created Form.js & building out markup

export default function Form(props) {
    // exact props - not sure what they need to be
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label>Name
                    <input type='text' onChange={onChange} name='username' value={values.username} />
                </label>
                <label>Email
                    <input type='email' onChange={onChange} name='email' value={values.email} />
                </label>
                <label>Role
                    <select onChange={onChange} name="role" value={values.role}>
                        <option value="">-- Select a Role --</option>
                        <option value="Super Hero">Team Member Role A</option>
                        <option value="Villian">Team Member Role B</option>
                        <option value="Soldier">Team Member Role C</option>
          </select>
                </label>

                    <div>
                        <button>Submit</button>
                    </div>
            </div>
        </form>

    )
}