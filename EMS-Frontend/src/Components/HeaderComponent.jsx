import React from 'react'
import Logo from "../assets/images/logo.png"
const HeaderComponent = () => {
  return (
    <header>
      <nav className="bg-pink-700 shadow-md px-6 py-4 flex justify-start items-center gap-5">
        <img src={Logo} className="w-10 h-10 shadow-lg rounded-xl float-left" />
        <a href="#" className='text-2xl font-bold text-pink-200'>
          Ahara
          </a>
      </nav>
    </header>
  )
}

export default HeaderComponent
