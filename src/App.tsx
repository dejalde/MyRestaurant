import React from 'react';
import logo from './logo.svg';
import Navigationbar from './Components/Navbar';
import Login from './Components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import MenuList from './Components/MenuList';
import CreateMenu from './Components/CreateMenu';
import CreateCategory from './Components/CreateCategory';
import CreateDish from './Components/CreateDish';
import ViewMenu from './Components/ViewMenu';
import ViewCategory from './Components/ViewCategory';
import CategoryCard from './Components/CategoryCard';
import DishCard from './Components/DishCard';
import ViewDish from './Components/ViewDish';
import PostMenu from './Components/PostMenu';
import EditCategory from './Components/EditCategory';
import EditDish from './Components/EditDish';





function App() {
  return (
    <BrowserRouter >
      {/* <Navigationbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/MenuList" element={<MenuList />} />
        <Route path="/CreateMenu" element={<CreateMenu />} />
        <Route path="/CreateCategory" element={<CreateCategory />} />
        <Route path="/CreateDish" element={<CreateDish />} />
        <Route path="/ViewMenu" element={<ViewMenu />} />
        <Route path="/ViewCategory/:id" element={<ViewCategory />} />
        <Route path="/CategoryCard" element={<CategoryCard />} />
        <Route path="/DishCard" element={<DishCard />} />
        <Route path="/ViewDish/:id" element={<ViewDish />} />
        <Route path="/PostMenu" element={<PostMenu />} />
        <Route path="/EditCategory/:id" element={<EditCategory />} />
         <Route path="/EditDish/:id" element={<EditDish />} /> 

        {/* <Route path="/Create" element={<CreateButton />} /> */}
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <Login />
      
    // </div>
  );
}

export default App;
