import React from 'react'
import UserCard from './UserCard'
import UserClassCard from './UserClassCard'


const About = () => {
  return (
    <div>
      <UserCard name={"Krishna Mohan"} location = "AndhraPradesh" gender="male"/>
      <UserClassCard name={"Krishna Mohan"} location = "AndhraPradesh" gender="male"/>
    </div>
  )
}

export default About