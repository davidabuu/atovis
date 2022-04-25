import React from 'react'
import UserLandingPage from '../../src/components/User/UserLandingPage'
import UserWebLayout from '../../src/components/WebLayout/UserWebLayout'

const Landing = () => {
  return (
    <UserWebLayout webtitle='Home Page'>
        <UserLandingPage/>
    </UserWebLayout>
  )
}

export default Landing