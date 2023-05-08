import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  
  const navigate= useNavigate();
  return (
    <>
      <Carousel>
      <Carousel.Item>
        <img  height="500px"
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_Mu9W2kHDhAAOLy797lgb2ZiO2UPbT3Hrg&usqp=CAU"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img width="50px" height="500px"
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9GSyvqw6_dlrYUzQ0UNmwQ2gaHItj4BcFg&usqp=CAU"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img width="50px" height="500px"
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzb0IFD9i42VcxKBRLdtzQsQHEKrXWJuqBEw&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   


    <div className="container" style={{textAlign: 'center'}} >
      <h3>WELCOME</h3>
      <h3>TO</h3>
      <h1 >FUSION DELIGHT</h1>
      <Button variant="dark"  onClick={()=>navigate('/Login')} >LOGIN AS ADMIN</Button>
    </div>
    </>
    
    
  );
  
}

export default Home;