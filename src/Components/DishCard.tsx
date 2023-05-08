import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Dish } from '../WebApi';
import { useNavigate } from 'react-router-dom';



function DishCard(props: any) {
    const navigate= useNavigate();
    
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.dishImage} style={{width: '286.4px', height: '190.78px'}}/>
            <Card.Body>
                <Card.Title>{props.dishName}</Card.Title>
                <Card.Text>{props.dishDescription} <br/>{props.dishPrice} <br/>{props.nature}</Card.Text>
                {/* <Card.Text>{props.dishPrice}</Card.Text>
                <Card.Text>{props.Nature}</Card.Text> */}
                <Button variant="dark" onClick={()=>navigate(`/EditDish/${props.dishId}`)}>EDIT</Button>
                <Button variant="dark" onClick={()=> Dish.delete(props.dishId)}>DELETE</Button>
            </Card.Body>
        </Card>
        
    </>

    
    
  );
}

export default DishCard;