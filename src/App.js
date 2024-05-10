import logo from './logo.svg';
import './App.css';
import  Home from './Home';
import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { lazy, Suspense } from "react";

const ReportGrid = lazy(() => import("./components/ReportGrid"));

function App() {
  return (
    <div className="App container">
      <h3 className='d-flex justify-content-center m-3'>
   </h3>  
      <BrowserRouter>
<Navbar /> 
      <Routes>
      <Route exact path="/report" element={
         <Suspense fallback={<>Loading...</>}>
             <ReportGrid/>
       </Suspense>
      }/>
      <Route exact path="/" element={<Home/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
