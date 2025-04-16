import React from 'react'
import Logo from '../assets/images/logo.png'
const ListOfEmployeeComponent = () => {
  const dummyData = [
    {
      "id": 1,
      "firstName": "Mahima",
      "lastName": "Gowtham",
      "email": "mahimagowtham@love.com"
    },
    {
      "id": 2,
      "firstName": "Kanchana",
      "lastName": "Selvaraj",
      "email": "kanchanaselvaraj@love.com"
    },
    {
      "id": 3,
      "firstName": "Jothi",
      "lastName": "Ramesh",
      "email": "jothiramesh@love.com"
    }
]

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white gap-1.5'>
      <div className='flex flex-row justify-center items-center gap-2.5 '>
        <img src = {Logo}className='w-20 h-20 ' />
      <h1 className='font-bold text-7xl text-center text-black'>Ahara</h1>
      </div>
      <h2 className='font-bold text-black text-4xl '>List of Employees</h2>

      <table className='w-1/2 border-2 border-black rounded-2xl shadow-lg mt-10'>
        <thead className='font-bold text-white text-2xl bg-red-600'>
          <tr>
            <th className='border-2 border-white'>ID</th>
            <th className='border-2 border-white'>First Name</th>
            <th className='border-2 border-white'>Last Name</th>
            <th className='border-2 border-white'>Email</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default ListOfEmployeeComponent
