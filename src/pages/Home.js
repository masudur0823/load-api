import React from 'react'
import { Row } from 'react-bootstrap'
import HomeCard from '../componets/HomeCard'
import Layout from '../componets/Layout'

function Home() {
  return (
    <Layout>
      <div className='d-flex align-items-center justify-content-center' style={{ height: '90vh' }}>
        <Row className='g-4 m-0'>
          <HomeCard />
        </Row>
      </div>
    </Layout>
  )
}

export default Home