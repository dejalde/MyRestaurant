import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dish() {
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Starters</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="dark">EDIT</Button>
                <Button variant="dark">DELETE</Button>
            </Card.Body>
        </Card>
        
    </>

    
    
  );
}
export default Dish;