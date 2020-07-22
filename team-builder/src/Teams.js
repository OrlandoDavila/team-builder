import React from 'react'

function TeamMembers(props){
    const {members} = props
    return(
        <>
        <h1>{members.name}</h1>
        <h2>{members.email}</h2>
        <h3>{members.role}</h3>
        </>
    )
}
export default TeamMembers