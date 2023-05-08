import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ViewCategory from './ViewCategory';


function MenuCard(props: any) {
  const navigate= useNavigate();
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.menuImage} style={{width: '286.4px', height: '190.78px'}} />
            <Card.Body>
                <Card.Title>{props.menuName}</Card.Title>
                <Card.Text>{props.menuDescription}</Card.Text>
                <Button onClick={()=>navigate(`/ViewCategory/${props.menuId}`)} variant="dark">VIEW</Button>
            </Card.Body>
        </Card>
        
    </>

    
    
  );
}

export default MenuCard;