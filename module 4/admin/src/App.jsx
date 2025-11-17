import React, { use, useContext } from "react";
import Login from "./pages/Login";
import { AppContext } from "./context/AppContext";
import { AdminContext } from "./context/AdminContext";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import Doctorlist from "./pages/Admin/Doctorlist";
import AddDoctor from "./pages/Admin/AddDoctor";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


const App = () => {
  const {aToken} = useContext(AdminContext);
  console.log("App rendered");
  return aToken?  ( 
    <div className="bg-white">
      <Navbar/>
      <div className="flex items-start">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllAppointment/>}/>
          <Route path='/doctor-list' element={<Doctorlist/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
        </Routes>
      </div>
      <ToastContainer/>
     
    </div>
  ):(
    <>
    <Login /> 
      <ToastContainer/>
    </>
  )
};

export default App;