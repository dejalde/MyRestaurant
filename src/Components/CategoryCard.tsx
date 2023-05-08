import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Category } from '../WebApi';


function CategoryCard(props: any) {
  const navigate= useNavigate();
  return (
    <>
        <Card style={{ width: '18rem' }}>
            
            <Card.Body>
                <Card.Title>{props.categoryName}</Card.Title>
                <Card.Text>{props.categoryDescription}</Card.Text>
                <Button onClick={()=>navigate(`/ViewDish/${props.categoryId}`)} variant="dark">VIEW</Button>
                <Button onClick={()=>navigate(`/EditCategory/${props.categoryId}`)} variant="dark">EDIT</Button>
                <Button variant="dark" onClick={()=> Category.delete(props.categoryId)}>DELETE</Button>
            </Card.Body>
        </Card>
        
    </>

    
    
  );
}

export default CategoryCard;