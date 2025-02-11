import React from 'react'
import UserCard from './UserCard'
import UserClassCard from './UserClassCard'


const About = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>About</h1>
      <UserCard name={"Krishna Mohan"} location = "AndhraPradesh" gender="male"/>
      <UserClassCard name={"Krishna Mohan"} location = "AndhraPradesh" gender="male"/>
    </div>
  )
}

export default About