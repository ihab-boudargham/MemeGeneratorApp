import React from 'react'

function Header() {
  return (
    <div className='Navbar flex border-black m-auto items-center justify-around gap-16 text-white font-bold'>
        <div className='flex text-lg'>
        <div className='icon border-1 border-black'></div>
        <div className='title'>MEME GENERATOR</div>
        </div>

        <p className='text-xs'>React Course - Project 3</p>
      
    </div>
  )
}

export default Header
