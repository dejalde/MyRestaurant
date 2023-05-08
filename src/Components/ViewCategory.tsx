import React, { useState ,useEffect} from 'react';
import { Category } from '../WebApi';
import Navigationbar from './Navbar';
import CategoryCard from './CategoryCard';
import {Col, Container, Row} from "react-bootstrap";
import { useParams } from 'react-router-dom';

function ViewCategory(){

    const [category, setCategory] = useState([])
    const params = useParams();

    async function getCategory () { 
        const data = await Category.getCategoriesByMenuId(parseInt(params.id || ''));    
        setCategory(data);
        console.log(category)
    }
    
    useEffect(() => {
        getCategory();
    }, [])

    return(
       <React.Fragment>
        <Navigationbar/>
        <br/>
        <Container>
            <Row>
                {category.length? category.map((e:any)=>{
                    return(
                        <Col sm>
                            <CategoryCard categoryName={e.categoryName} categoryImage={e.categoryImage} categoryDescription={e.categoryDescription} categoryId={e.categoryId}/>
                        </Col>
                    )
                }):""
            }
            </Row>
        </Container>
       </React.Fragment>
  )
}
  export default ViewCategory;