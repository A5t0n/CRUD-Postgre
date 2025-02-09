import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'
import ModelForm from './components/ModelForm'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  const[isOpen,setIsOpen]=useState(false);
  const[modelMode,setModelMode]=useState('add');
  const [searchTerm, setSearchTerm] = useState('');


  const handleOpen = (mode)=>{
    setIsOpen(true);
  }

  const handleSubmit = ()=>{
    if(modelMode==='add'){
      console.log('model mode Add');
    }
    else{
      console.log('model mode Edit');
    }
  }

  return (
    <>
     <NavBar onOpen={()=> handleOpen('add')} onSearch={setSearchTerm}/>
     <TableList handleOpen={handleOpen} searchTerm={searchTerm}/>
     <ModelForm 
     isOpen={isOpen} 
     onSubmit={handleSubmit}
     onClose={()=>setIsOpen(false)}
     mode={modelMode}/>
    </>
  )
}

export default App;
