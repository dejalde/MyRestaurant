import React, { useState ,useEffect} from 'react';
import { Dish } from '../WebApi';
import Navigationbar from './Navbar';
import DishCard from './DishCard';
import {Col, Container, Row} from "react-bootstrap";
import { useParams } from 'react-router-dom';

function ViewDish(){

    const [dish, setDish] = useState([])
    const params = useParams();

    async function getDish () { 
        const data = await Dish.getDishesByCategoryId(parseInt(params.id || ''));    
        setDish(data);
        console.log(dish)
    }
    
    useEffect(() => {
        getDish();
    }, [])

    return(
       <React.Fragment>
        <Navigationbar/>
        <br/>
        <Container>
            <Row>
                {dish.length? dish.map((e:any)=>{
                    return(
                        <Col sm>
                            <DishCard dishName={e.dishName} dishImage={e.dishImage} dishDescription={e.dishDescription} dishPrice={e.dishPrice} nature={e.nature} dishId={e.dishId}/>
                        </Col>
                    )
                }):""
            }
            </Row>
        </Container>
       </React.Fragment>
  )
}
  export default ViewDish;