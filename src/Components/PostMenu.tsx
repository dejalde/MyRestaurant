import { useState } from "react"
import { Menu } from "../WebApi";
import { Button, Form } from "react-bootstrap";

function PostMenu() {

    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');

    const data = {
        menuName: name,
        menuImage: image,
        menuDescription: description
    }

    function handleSubmit(e:any) {
        e.preventDefault();
        Menu.create(data);
    }

    return(
        <div className="container">
            <h1>Add New Menu</h1>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">

                <Form.Label>Menu Name</Form.Label>

                <Form.Control type="text" id="menuName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Menu Name" />
                </Form.Group>
                <Form.Group className="mb-3">

                    <Form.Label>Menu Image</Form.Label>

                    <Form.Control type="text" id="menuImage" value={image} onChange={(e) => setImage(e.target.value)}  placeholder="Enter the URL of the Image" />

                </Form.Group>
                <Form.Group className="mb-3">

                    <Form.Label>Menu Description</Form.Label>

                    <Form.Control type="text" id="menuDescription" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter the Description of the Menu" />

                </Form.Group>

    <Button variant="outline-dark" type="submit">Submit</Button>

</Form>

</div>
    )
}
export default PostMenu;