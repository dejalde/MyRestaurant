import { useState } from "react"
import { Dish } from "../WebApi";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditDish() {
    const params= useParams();
    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState(0);
    const[nature, setNature] = useState('');

    const data = {
        dishId: params.id,
        dishName: name,
        dishImage: image,
        dishDescription: description,
        dishPrice: price,
        nature: nature
    }

    function handleSubmit(e:any) {
        e.preventDefault();
        Dish.put(data, parseInt(params.id ||''));
    }

    return(
        <div className="container">
            <h1>Edit Dish</h1>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                    <Form.Label>Enter DishId</Form.Label>
                    <Form.Control type="number" id="dishId" value={params.id}  placeholder="Enter the DishId" />
                  </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>Dish Name</Form.Label>
                  <Form.Control type="text" id="dishName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Dish Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Dish Image</Form.Label>
                    <Form.Control type="text" id="dishImage" value={image} onChange={(e) => setImage(e.target.value)}  placeholder="Enter the URL of the Image" />
                  </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dish Description</Form.Label>
                    <Form.Control type="text" id="dishDescription" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter the Description of the dish" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dish Price</Form.Label>
                    <Form.Control type="number" id="dishDescription" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}  placeholder="Enter the Price of the dish" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dish Nature</Form.Label>
                    <Form.Control type="text" id="dishNature" value={nature} onChange={(e) => setNature(e.target.value)}  placeholder="Enter the Nature of the dish" />
                </Form.Group>
                

                <Button variant="outline-dark" type="submit">Submit</Button>

            </Form>

        </div>
    )
}
export default EditDish;