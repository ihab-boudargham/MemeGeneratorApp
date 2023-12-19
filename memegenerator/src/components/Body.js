import React from 'react'
import memesdata from './memesdata'

function Body() {

  const [memeImage , setMemeImage] = React.useState("")

  function getMemeImage() {
    const memesArray = memesdata.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className='form size border-black border-2 m-auto bg-gray-100'>
      <div className='inputs flex justify-around h-10 mt-7 '>
        <label>
        <p> Top Text </p>
        <input type='text' className='border-gray-600 border-2 pl-1 mt-2 rounded-sm p-1' placeholder='Top Text'/>
        </label>

        <label>
        <p> Bottom Text </p>
        <input type='text' className='border-gray-600 border-2 pl-1  mt-2 rounded-sm p-1' placeholder='Bottom Text'/>
        </label>
      </div>

      <button className='button flex items-center justify-center mx-auto rounded-sm p-2 mt-10 text-white' onClick={getMemeImage}>Get a new meme image!</button>

      <div className='display border-black border-2 m-auto mt-7'><img className='display' src={memeImage}/> </div>


    </div>
  )
}

export default Body
