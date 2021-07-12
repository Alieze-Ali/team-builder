import React from 'react'


function TeamMember (props) {
    // passing in value from l34 app.js to deconstruct teamMember
    const { teamMember } = props

    return(
        <div className="teamMember-container">
            <h1>Name={teamMember.username}</h1>
            <p>Email={teamMember.email}</p>
            <p>Role={teamMember.role}</p>
        </div>
    )
}

export default TeamMember