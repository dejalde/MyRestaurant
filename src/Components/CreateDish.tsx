import { useState } from "react"
import { Dish } from "../WebApi";
import { Button, Form } from "react-bootstrap";

function CreateDish() {

    const[categoryId, setCategoryId] = useState(0);
    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState('');
    const[nature, setNature] = useState('');

    const data = {
        categoryId: categoryId,
        dishName: name,
        dishImage: image,
        dishDescription: description,
        dishPrice: price,
        Nature: nature
    }

    function handleSubmit(e:any) {
        e.preventDefault();
        Dish.create(data, categoryId);
    }

    return(
        <div className="container">
            <h1>Add New Dish</h1>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                  <Form.Label>CategoryId</Form.Label>
                  <Form.Control type="number" id="categoryId" value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))} placeholder="Enter CategoryId" />
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
                    <Form.Control type="number" id="dishDescription" value={price} onChange={(e) => setPrice(e.target.value)}  placeholder="Enter the Price of the dish" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dish Nature</Form.Label>
                    <Form.Control type="text" id="Nature" value={nature} onChange={(e) => setNature(e.target.value)}  placeholder="Enter the Nature of the dish" />
                </Form.Group>

                <Button variant="outline-dark" type="submit">Submit</Button>

              </Form>

</div>
    )
}
export default CreateDish;