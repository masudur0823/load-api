import React, { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import UserInfo from '../componets/UserInfo'

function User() {

  const [user, setUser] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  return (
    <>
      {
        user === '' ?
          <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <Spinner animation="grow" variant="success" />
          </div>
          :
          <>
            <h1 className='text-center'>total user : {user.length}</h1>
            <Container>
              <Row className='g-4 m-0'>
                <UserInfo user={user}  />
              </Row>
            </Container>
          </>
      }
    </>
  )
}

export default User