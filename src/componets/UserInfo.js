import axios from 'axios';
import { Col, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useQuery } from 'react-query';
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

    const { data, isLoading, isError, error} = useQuery("user", () => {
        return axios.get(`https://jsonplaceholder.typicode.com/users`)
      });

      const users = data?.data;

      if (isLoading) {
        <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow" variant="success" />
      </div>
      }

      if (isError) {
        return <h1>{error.message}</h1>;
      }


    return (
        <>
        <h1 className='text-center'>total user : {users?.length}</h1>
            {
                users?.map((info) => <UserCard info={info} key={info.id}></UserCard>)
            }
        </>
    )
}

export default UserInfo