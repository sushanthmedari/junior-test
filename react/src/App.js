import { useState,useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import './App.scss';

import ProductList from './components/MainPage/ProductList';
import ProductAdd from './components/AddPage/ProductAdd';
// const url= process.env.REACT_APP_URL;
const url= "http://localhost:8080/";

function App() {

const [apiData,setApiData]=useState([]);


const getApiData = async () => {

const response = await fetch(url);
const data=await response.json();
setApiData(data) 

};

useEffect(() => {
  getApiData()
}, []);
    

  return (

  <Router> 
   <Routes>
     <Route exact path='/' element={<ProductList apiData={apiData} setApiData={setApiData} />} />
     <Route path='/add-product' element={<ProductAdd apiData={apiData} setApiData={setApiData}  />} />     
   </Routes>
  </Router>

  );
}

export default App;
