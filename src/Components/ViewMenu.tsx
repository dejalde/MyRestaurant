import React, { useState ,useEffect} from 'react';
import { Menu } from '../WebApi';
import Navigationbar from './Navbar';
import MenuCard from './MenuList';
import {Col, Container, Row} from "react-bootstrap";

function ViewMenu(){

    const [menu, setMenu] = useState([])

    async function getMenu () { 
        const data = await Menu.getAll();    
        setMenu(data);
        console.log(menu)
    }
    
    useEffect(() => {
        getMenu();
    }, [])

    return(
        
       <React.Fragment>
        <Navigationbar/>
        <br/>
        <Container>
            <Row>
                {menu.length? menu.map((e:any)=>{
                    return(
                        <Col sm>
                            <MenuCard menuName={e.menuName} menuImage={e.menuImage} menuDescription={e.menuDescription} menuId={e.menuId}/>
                        </Col>
                    )
                }):""
            }
            </Row>
        </Container>
       </React.Fragment>
  )
}
  export default ViewMenu;