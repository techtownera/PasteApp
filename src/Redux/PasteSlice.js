import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
  pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : [],
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const Paste = action.payload;
      state.pastes.push(Paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("Paste Added Successfully.........");
      
    },
    updateTopastes: (state, action) => {
      const paste = action.payload;
      const Index = state.pastes.findIndex((item)=> item._id === paste._id);

      if(Index >= 0){
        state.pastes[Index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated.....");
  
      }

        
    },
    resetAllPastes: (state, action) =>{
          state.pastes = [];

          localStorage.removeItem("pastes");
          toast.success("All Paste Reset");
    },
    removeFrompastes: (state, action) => {

      const pasteID = action.payload;

      console.log(pasteID);
      
      const Index = state.pastes.findIndex((item)=> item._id === pasteID);

      if(Index >= 0){
        state.pastes.splice(Index,1);

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Deleted....");

      }
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateTopastes, resetAllPastes,removeFrompastes } = PasteSlice.actions

export default PasteSlice.reducer