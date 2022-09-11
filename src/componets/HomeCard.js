import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function HomeCard() {
    const cardInfo = [
        {
            id: 1,
            title: "News Blogs",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 2,
            title: "Meals",
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ];
    return (
        <>
            {
                cardInfo.map((info) =>
                    <Col md="6" key={info.id}>
                        <Card style={{ width: '18rem' }} className="m-auto">
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <Card.Text>
                                    {info.desc}
                                </Card.Text>
                                <Link to={info.id === 1 ? '/news' : '/meal'}><Button variant="primary">Click here</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
        </>
    )
}

export default HomeCard