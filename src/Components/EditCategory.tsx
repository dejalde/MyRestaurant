import { useState } from "react"
import { Category } from "../WebApi";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function EditCategory() {
    const params= useParams();
    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');

    const data = {
        categoryId: params.id,
        categoryName: name,
        categoryImage: image,
        categoryDescription: description
    }

    function handleSubmit(e:any) {
        e.preventDefault();
        Category.put(data, parseInt(params.id ||''));
    }

    return(
        <div className="container">
            <h1>Update Category</h1>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                    <Form.Label>Enter CategoryId</Form.Label>
                    <Form.Control type="number" id="categoryId" value={params.id}  placeholder="Enter the CategoryId" />
                  </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" id="categoryName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Category Name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Category Image</Form.Label>
                    <Form.Control type="text" id="categoryImage" value={image} onChange={(e) => setImage(e.target.value)}  placeholder="Enter the URL of the Image" />
                  </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category Description</Form.Label>
                    <Form.Control type="text" id="categoryDescription" value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Enter the Description of the Category" />
                </Form.Group>
                

                <Button variant="outline-dark" type="submit">Submit</Button>

            </Form>

        </div>
    )
}
export default EditCategory;