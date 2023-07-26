import Card from 'react-bootstrap/Card';

function CardNews(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.secundaryTitle}</Card.Subtitle>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <Card.Link href="#">Nota Completa</Card.Link>                
            </Card.Body>
        </Card>
    );
}

export default CardNews;