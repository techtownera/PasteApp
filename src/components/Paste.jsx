import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFrompastes } from '../Redux/PasteSlice';
import toast from 'react-hot-toast';
import {Link} from 'react-router-dom'

const Paste = () => {

  const pastes = useSelector((state)=> state.paste.pastes);

  // console.log(pastes);

  const dispatch = useDispatch();
  const [SearchPaste, setSearchPaste] = useState('');

  const filteredData = pastes.filter((paste)=> paste.title.toLowerCase().includes(SearchPaste.toLowerCase()));
  
  function handleDelete(pasteID){
       dispatch(removeFrompastes(pasteID));
  }

  return (
    // <div>Paste</div>
    <>

    <div>

    <input className="p-2 rounded-2xl mt-5 min-w-[600px]" type='search' placeholder='Search here' value={SearchPaste}
     onChange={(e)=> setSearchPaste(e.target.value)} />

    </div>

    <div className='flex flex-col gap-5 mt-5'> 

     {filteredData.length > 0 && filteredData.map((paste)=>{
     
        return(   
        <>
          <div className='border' key={paste?._id} >
             <div>
              {paste.title}
             </div>

             <div>
              {paste.content}
             </div>

             <div className='flex flex-row gap-4  place-content-evenly'>

              <button >
               <Link to={`/?pasteID=${paste?._id}`}>Edit</Link>
              </button>

              <button>
                <Link to={`/pastes/${paste?._id}`}>view</Link>
              </button>

              <button onClick={()=> handleDelete(paste?._id) }>
                Delete
              </button>

              <button onClick={()=>{ 
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied To Clipboard......")
              }}>
                copy
              </button>

              <button>
                Share
              </button>

             </div>

             <div>
               {paste.createdAt}
             </div>

            </div>
            </>
        )}
     
     ) }



    </div>



     </>

  )
}

export default Paste