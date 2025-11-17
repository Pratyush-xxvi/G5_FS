import React from 'react'
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'
function Sidebar() {
    const {aToken} = useContext(AdminContext);
  return (
    <div className='min-h-screen bg-white border-r'>
        {
            aToken && <ul className='text-black mt-5' >
                <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-white border-r-4 border-blue-600':''}`} to={'/admin-dashboard'}>
                    <img src={assets.home_icon} alt='' />
                    <p>Dashboard</p>
                </NavLink>
            
             <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-white border-r-4 border-blue-600':''}`} to={'/all-appointments'}>
                    <img src={assets.appointment_icon} alt='' />
                    <p>Appointments</p>
                </NavLink>

                 <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-white border-r-4 border-blue-600':''}`} to={'/add-doctor'}>
                    <img src={assets.add_icon} alt='' />
                    <p>Add Doctor</p>
                </NavLink>

                 <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-white border-r-4 border-blue-600':''}`} to={'/doctor-list'}>
                    <img src={assets.people_icon} alt='' />
                    <p>Doctors list</p>
                </NavLink>
            </ul>
        }
    </div>
  )
}

export default Sidebar