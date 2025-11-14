import React, { useContext } from 'react'
import { useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-hot-toast';
function AddDoctor() {
  const [doctorImage, setDoctorImage] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 year')
  const [fee, setFee] = useState('')
  const [specialization, setSpecialization] = useState('General physician')
  const [education, setEducation] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [about, setAbout] = useState('')
  

  // backend url dekhna esmee
  const {backendUrl,aToken} = useContext(AdminContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try{
      if(!doctorImage)
      {
        return toast.error('Image not selected');
      }
      const formData = new FormData();
      formData.append('doctorImage', doctorImage);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fee', fee);
      formData.append('specialization', specialization);
      formData.append('education', education);
      formData.append('address1', JSON.stringify({ line1: address1 }));
      formData.append('address2', JSON.stringify({line2: address2}));
      formData.append('about', about);
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-10">
      <p className="text-2xl font-semibold text-center text-indigo-700 mb-6">Add Doctor</p>

      
      <div className="flex flex-col items-center mb-8">
        <label htmlFor="doc-img" className="cursor-pointer">
          <img
            src={doctorImage? URL.createObjectURL(doctorImage) : assets.upload_area}
            alt=""
            className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 hover:border-indigo-500 transition"
          />
        </label>
        <input onChange={(e)=>setDoctorImage(e.target.files[0])} type="file" id="doc-img" hidden />
        <p className="text-gray-500 text-sm mt-2 text-center">
          Upload doctor <br /> picture
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <p className="font-medium text-gray-700 mb-1">Doctor Name</p>
            <input onChange={(e)=> setName(e.target.value)} value={name}
              type="text"
              placeholder="Enter name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-1">Doctor Email</p>
            <input onChange={(e)=> setEmail(e.target.value)} value={email}
              type="email"
              placeholder="Enter email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-1">Doctor Password</p>
            <input onChange={(e)=> setPassword(e.target.value)} value={password}
              type="password"
              placeholder="Enter password"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-1">Experience</p>
            <select onChange={(e)=> setExperience(e.target.value)} value={experience}
             className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none">
              <option value="">Select experience</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1 === 10 ? '10+ years' : `${i + 1} year${i + 1 > 1 ? 's' : ''}`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-1">Fee</p>
            <input onChange={(e)=> setFee(e.target.value)} value={fee}
              type="number"
              placeholder="Enter fee"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <p className="font-medium text-gray-700 mb-1">Specialization</p>
            <select onChange={(e)=> setSpecialization(e.target.value)} value={specialization} className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none">
              <option value="">Select specialization</option>
              <option value="General physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-1">Education</p>
            <input onChange={(e)=> setEducation(e.target.value)} value={education}
              type="text"
              placeholder="Enter education"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="font-medium text-gray-700 mb-1">Address</p>
            <input onChange={(e)=> setAddress1(e.target.value)} value={address1}
              type="text"
              placeholder="Enter address1"
              required
              className="w-full mb-2 border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none"
            />
            <input onChange={(e)=> setAddress2(e.target.value)} value={address2}
              type="text"
              placeholder="Enter address2"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* About Doctor */}
      <div className="mb-6">
        <p className="font-medium text-gray-700 mb-1">About Doctor</p>
        <textarea onChange={(e)=> setAbout(e.target.value)} value={about}
          placeholder="Write about doctor..."
          rows={5}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:border-indigo-500 focus:outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="block w-full md:w-auto mx-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-lg transition"
      >
        Add Doctor
      </button>
    </form>
  );
}

export default AddDoctor;
