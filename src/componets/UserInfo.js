import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function UserCard(props) {
    const { id, name, username } = props.info;
    const navigate = useNavigate();

    const showUserDetails = () => {
        const path = `/users/${id}`;
        navigate(path);
    }
    return (
        <>
            <Col md="4">
                <Card>
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Button variant="primary" onClick={showUserDetails}>{username} {id}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}


function UserInfo() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(res?.data);
        }
        fetchUser();
    }, [])

    return (
        <>
        <h1 className='text-center'>total user : {user?.length}</h1>
            {
                user?.map((info) => <UserCard info={info} key={info.id}></UserCard>)
            }
        </>
    )
}

export default UserInfo