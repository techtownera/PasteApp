import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateTopastes } from '../Redux/PasteSlice';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';

const Home = () => {

  const [Title, setTitle] = useState('');
  const [value , setValue] = useState('');
  const [Paramchange, setParamchange] = useSearchParams();

  const pasteID = Paramchange.get('pasteID');

  const dispatch = useDispatch();

  const allpaste = useSelector((state)=> state.paste.pastes );

  useEffect(() => {

    console.log("Use Effect working.....");
    if(pasteID){
      const PASTE = allpaste.find((P)=> P._id === pasteID );
      console.log("Paste Found");

      setTitle(PASTE.title);
      setValue(PASTE.content);

    }
    
  },[pasteID]);
  

  function createPaste(){
    const paste = {

      title: Title,
      content: value,
      _id: pasteID || Date.now().toString(36),
      createdAt: new Date().toISOString(),

    }

    if(pasteID){
       dispatch(updateTopastes(paste));
    }
    else{
        dispatch(addToPastes(paste));
    }

    setTitle('')
    setValue('')
    setParamchange({})
     
  }


  return (
    <div>

     <div className='flex flex-row gap-7 place-content-between mt-8' >

     <input className='p-1 rounded-2xl mt-2 w-[66%] pl-4' type='text' placeholder='Enter Title' 
     value={Title} 
     onChange={(e)=> setTitle(e.target.value)}/>

     <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>
     {pasteID ? "Update Paste" : "Create Paste"}
     </button>

     </div>

     <div className='mt-8'>
     <textarea className='rounded-2xl mt-4 min-w-[500px] p-4'
     placeholder='Enter Your Text Here' 
     value={value} 
     onChange={(e)=> setValue(e.target.value)}
     rows={40}
     />
     </div>

    </div>
  )
}

export default Home