import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function MyAppointment() {
  const { doctors } = useContext(AppContext)

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Appointments</h2>

      <div className="grid gap-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Doctor Image */}
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 rounded-full border object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1">
              <p className="text-xl font-semibold text-gray-900">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>

              <div className="mt-3">
                <p className="font-medium text-gray-700">Address:</p>
                <p className="text-gray-600">{item.address.line1}</p>
                <p className="text-gray-600">{item.address.line2}</p>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Date & Time:</span> 25 July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 md:ml-auto">
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Pay Online
              </button>
              <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
