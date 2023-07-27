import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Calo from '../images/calo.jpg'
import Tomy from '../images/cardenas.jpg'
import Aguilar from '../images/mili.jpg'
import Ramos from '../images/ramos.jpg'
import Fauret from '../images/fauret.jpg'


function CardPeople() {
    return (
        <>        
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={Calo} />
                    <Card.Body>
                        <Card.Title>Adrian Calo</Card.Title>
                        <h6>Full Stack Developer</h6>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer. Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Tomy} />
                    <Card.Body>
                        <Card.Title>Tomas Cardenas</Card.Title>
                        <h6>Backend Developer</h6>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Aguilar} />
                    <Card.Body>
                        <Card.Title>Milagros Aguilar</Card.Title>
                        <h6>Project Manager</h6>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={Ramos} />
                    <Card.Body>
                        <Card.Title>Marcelo Ramos</Card.Title>
                        <h6>Scrum Master</h6>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Fauret} />
                    <Card.Body>
                        <Card.Title>Gaston Fauret</Card.Title>
                        <h6>Frontend Developer</h6>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardGroup>
        </>
    );
}

export default CardPeople;