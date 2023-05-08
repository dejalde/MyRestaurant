import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';

function CreateButton() {
  const navigate= useNavigate(); 
  return (
    <DropdownButton id="create-button" title="Create"  variant="dark" >
      <Dropdown.Item  href="/PostMenu">Menu</Dropdown.Item>
      <Dropdown.Item href="/CreateCategory">Category</Dropdown.Item>
      <Dropdown.Item href="/CreateDish">Dish</Dropdown.Item>
    </DropdownButton>
  );
}

export default CreateButton;