import React from 'react'
import Layout from '../../src/components/Layout/Layout'
import AllCategory from '../../src/components/User/AllCategory'
import UserWebLayout from '../../src/components/WebLayout/UserWebLayout'

const Landing = () => {
  return (
    <UserWebLayout webtitle='All Products'>
        <Layout>
            <AllCategory/>
        </Layout>
    </UserWebLayout>
  )
}

export default Landing