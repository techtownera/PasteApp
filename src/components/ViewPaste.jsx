import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id} = useParams();

  const allpaste = useSelector((state)=> state.paste.pastes);

  // console.log("ALl Paste loaded:- ", allpaste);

  const paste = allpaste.filter((p) => p._id === id)[0];
  console.log("filtered paste:- ", paste);



  return (
    // <div>ViewPaste</div>


    <div>

     <div className='flex flex-row gap-7 place-content-between mt-8' >

     <input className='p-1 rounded-2xl mt-2 w-[66%] pl-4' type='text' placeholder='Enter Title' 
     value={paste.title} 
     disabled
    //  onChange={(e)=> setTitle(e.target.value)}

     />

     {/* <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>
     {pasteID ? "Update Paste" : "Create Paste"}
     </button> */}

     </div>

     <div className='mt-8'>
     <textarea className='rounded-2xl mt-4 min-w-[500px] p-4'
     placeholder='Enter Your Text Here' 
     value={paste.content} 
     disabled
    //  onChange={(e)=> setValue(e.target.value)}
     rows={40}
     />
     </div>

    </div>

  )
}

export default ViewPaste