import { useState } from "react"
import { Category } from "../WebApi";
import { Button, Form } from "react-bootstrap";

function CreateCategory() {

  const[menuId, setMenuId] = useState(0);
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');

    const data = {
        menuId : menuId,
        categoryName: name,
        categoryDescription: description
    }

    function handleSubmit(e:any) {
        e.preventDefault();
        Category.create(data, menuId);
    }

    return(
        <div className="container">
            <h1>Add New Category</h1>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                    <Form.Label>Enter MenuId</Form.Label>
                    <Form.Control type="number" id="menuId" value={menuId} onChange={(e) => setMenuId(parseInt(e.target.value))} placeholder="Enter the MenuId" />
                  </Form.Group>

                <Form.Group className="mb-3">

                  <Form.Label>Category Name</Form.Label>
                  <Form.Control type="text" id="categoryName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Category Name" />
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
export default CreateCategory;