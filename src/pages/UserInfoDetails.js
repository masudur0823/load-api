import React from 'react'

function UserInfoDetails() {
    return (
        <>
            {
                user.map((info) =>
                    <Col md="4" key={info.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Name: {info.name}</Card.Title>
                                <Card.Title>User Name: {info.username}</Card.Title>
                                <Card.Title>Email: {info.email}</Card.Title>
                                <Card.Title>Address: </Card.Title>
                                <Card.Text>
                                    {info.address.street}, {" "}
                                    {info.address.suite} , {" "}
                                    {info.address.city}, {" "}
                                    {info.address.zipcode},
                                </Card.Text>
                                <Card.Title>Phone: {info.phone}</Card.Title>
                                <Card.Title>
                                    Website:
                                    <a href={`http://${info.website}`} target="_blank" rel="noreferrer">
                                        {info.website}
                                    </a>
                                </Card.Title>
                                <Button variant="primary">Click here : {info.id}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
        </>
    )
}

export default UserInfoDetails