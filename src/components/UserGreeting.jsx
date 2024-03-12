import React from 'react'

const UserGreeting = () => {
    const isLoggedIn = true
  return (
    // <h3>welcome {isLoggedIn ? 'Lili' : 'Guest'} </h3>
    <h3> {isLoggedIn && 'Welcome Lili'} </h3>
  )
}

export default UserGreeting