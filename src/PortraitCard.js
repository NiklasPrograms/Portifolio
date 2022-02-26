import { Container, Card, Button } from 'react-bootstrap'

const PortraitCard = () => {
    return (    
		<Container>
        <Card style={{ width: '20rem'}} className="text-center">
        <Card.Img variant="top" src="https://picsum.photos/1200/800" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
		</Container>
    );
}

export default PortraitCard;