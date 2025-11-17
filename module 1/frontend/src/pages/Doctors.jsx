import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { specialityData } from "../assets/assets";

function Doctors() {
  const { speciality } = useParams();
  const [filterDoct, setFilterDoct] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  // Apply filter whenever doctors or speciality changes
  useEffect(() => {
    console.log("Current Speciality from useParams:", speciality);
    console.log("Doctors from context:", doctors);
    if (speciality) {
      const cleanSpeciality = decodeURIComponent(speciality).toLowerCase().trim();
      console.log("Cleaned URL Speciality:", cleanSpeciality);
      const filtered = doctors.filter((doc) => {
        const docSpeciality = doc.speciality?.toLowerCase().trim();
        console.log("Doctor Speciality:", docSpeciality);
        return docSpeciality === cleanSpeciality;
      });
      console.log("Filtered Doctors:", filtered);
      setFilterDoct(filtered);
    } else {
      console.log("No speciality, showing all doctors:", doctors);
      setFilterDoct(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Sidebar specialties */}
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() => {
              console.log("Navigating to: /doctors");
              navigate("/doctors");
            }}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              !speciality ? "bg-indigo-100 text-black" : ""
            }`}
          >
            All Doctors
          </p>
          {specialityData.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                const url = `/doctors/${encodeURIComponent(item.speciality)}`;
                console.log("Navigating to:", url);
                navigate(url);
              }}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality &&
                decodeURIComponent(speciality).toLowerCase().trim() ===
                  item.speciality.toLowerCase().trim()
                  ? "bg-indigo-100 text-black"
                  : ""
              }`}
            >
              {item.speciality}
            </p>
          ))}
        </div>

        {/* Doctors list */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterDoct.length > 0 ? (
            filterDoct.map((item) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={item._id}
                className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl overflow-hidden p-4 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-sm"
              >
                <img
                  className="bg-blue-50 rounded-md"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No doctors found for this speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Doctors;








// // import React, { useContext, useEffect, useState } from 'react'
// // import { useParams, useNavigate } from 'react-router-dom'
// // import { AppContext } from '../context/AppContext';
// // import { specialityData } from '../assets/assets';

// // function Doctors() {
// //   const { speciality } = useParams();  // Match spelling with your data
// //   const [filterDoct, setFilterDoct] = useState([]);
// //   const { doctors } = useContext(AppContext);
// //   const navigate = useNavigate();

// //   const applyFilter = () => {
// //     if (speciality) {
// //       setFilterDoct(doctors.filter(doc => doc.speciality === speciality));
// //     } else {
// //       setFilterDoct(doctors);
// //     }
// //   };

// //   useEffect(() => {
// //     applyFilter();
// //   }, [doctors, speciality]);

// //   return (
// //     <div>
// //       <p className='text-gray-600'>Browse through the doctors specialist.</p>
// //       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
// //         {/* Sidebar specialties */}
// //         <div className="flex flex-col gap-4 text-sm text-gray-600">
// //           <p
// //             onClick={() => speciality=== 'General Physician'? navigate('/doctors') :navigate('/doctors/General Physician')}
// //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === " General Physician" ? "bg-indigo-100 text-black" : ""}`}
// //           >
// //             General Physician
// //           </p>
// //           <p
// //             onClick={() => speciality==='Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')}
// //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}
// //           >
// //             Gynecologist
// //           </p>
// //           <p
// //             onClick={() => speciality==='Dermatologist'?navigate('/doctors'): navigate('/doctors/Dermatologist')}
// //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}
// //           >
// //             Dermatologist
// //           </p>
// //           <p
// //             onClick={() =>speciality==='Pediatricians'?navigate('/doctors'): navigate('/doctors/Pediatricians')}
// //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}
// //           >
// //             Pediatricians
// //           </p>
// //           <p
// //             onClick={() =>speciality==='Neurologist'?navigate('/doctors') :navigate('/doctors/Neurologist')}
// //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}
// //             >
// //             Neurologist
// //           </p>
// //           <p
// //             onClick={() =>speciality==='Gastroenterologist'?navigate('/doctors'): navigate('/doctors/Gastroenterologist')}
// //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}
// //           >
// //             Gastroenterologist
// //           </p>
// //         </div>

// //         {/* Doctors list */}
// //        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //     {filterDoct.map((item) => (
// //       <div
// //         onClick={() => navigate(`/appointment/${item._id}`)}
// //         key={item._id}
// //         className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl overflow-hidden p-4 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-sm"
// //       >
// //         <img className="bg-blue-50 rounded-md" src={item.image} alt={item.name} />
// //         <div className="p-4 text-center">
// //           <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
// //             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
// //             <p>Available</p>
// //           </div>
// //           <p className="text-gray-900 text-lg font-medium">{item.name}</p>
// //           <p className="text-gray-600 text-sm">{item.speciality}</p>
// //         </div>
// //       </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Doctors






// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// function Doctors() {
//   const { speciality } = useParams();
//   const [filterDoct, setFilterDoct] = useState([]);
//   const { doctors } = useContext(AppContext);
//   const navigate = useNavigate();

//   // Clean & normalize speciality from URL
//   const normalizedSpeciality = speciality
//     ? decodeURIComponent(speciality).toLowerCase().trim()
//     : null;

//  const applyFilter = () => {
//   if (normalizedSpeciality) {
//     const filtered = doctors.filter((doc) => {
//       const docSpec = doc.speciality?.toLowerCase().trim();
//       console.log("Comparing:", docSpec, "with", normalizedSpeciality);
//       return docSpec === normalizedSpeciality;
//     });
//     console.log("Filtered Doctors:", filtered);
//     setFilterDoct(filtered);
//   } else {
//     console.log("No speciality provided. Showing all doctors.");
//     setFilterDoct(doctors);
//   }
// };


//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div>
//       <p className="text-gray-600">Browse through the doctors specialist.</p>
//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         {/* Sidebar specialties */}
//         <div className="flex flex-col gap-4 text-sm text-gray-600">
//           <p
//             onClick={() => navigate("/doctors")}
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer ${
//               !normalizedSpeciality ? "bg-indigo-100 text-black" : ""
//             }`}
//           >
//             All Doctors
//           </p>

//           {[
//             "General Physician",
//             "Gynecologist",
//             "Dermatologist",
//             "Pediatricians",
//             "Neurologist",
//             "Gastroenterologist",
//           ].map((spec) => (
//             <p
//               key={spec}
//               onClick={() => navigate(`/doctors/${encodeURIComponent(spec)}`)}
//               className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded cursor-pointer ${
//                 normalizedSpeciality === spec.toLowerCase().trim()
//                   ? "bg-indigo-100 text-black"
//                   : ""
//               }`}
//             >
//               {spec}
//             </p>
//           ))}
//         </div>

//         {/* Doctors list */}
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filterDoct.length > 0 ? (
//             filterDoct.map((item) => (
//               <div
//                 onClick={() => navigate(`/appointment/${item._id}`)}
//                 key={item._id}
//                 className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl p-4 hover:-translate-y-2 transition-all duration-500 cursor-pointer shadow-sm"
//               >
//                 <img
//                   className="bg-blue-50 rounded-md"
//                   src={item.image}
//                   alt={item.name}
//                 />
//                 <div className="p-4 text-center">
//                   <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-1">
//                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                     <p>Available</p>
//                   </div>
//                   <p className="text-gray-900 text-lg font-medium">{item.name}</p>
//                   <p className="text-gray-600 text-sm">{item.speciality}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No doctors found for this speciality.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Doctors;

