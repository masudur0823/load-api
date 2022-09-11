import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function UserCard(props) {
    const { id, name, username } = props.info;
    const navigate = useNavigate;

    const showUserDetails = () => {
        const path = `/news/${id}`;
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


function UserInfo(props) {
    const user = props.user;

    return (
        <>
            {
                user.map((info) => <UserCard info={info} key={info.id}></UserCard>)
            }
        </>
    )
}

export default UserInfo