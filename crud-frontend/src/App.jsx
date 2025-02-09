import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import TableList from './components/Tablelist'
import ModelForm from './components/ModelForm'
import { useEffect } from 'react'
import axios from 'axios'
import { set } from 'mongoose'

function App() {

  const[isOpen,setIsOpen]=useState(false);
  const[modelMode,setModelMode]=useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState([]);
  const [tableData, setTableData] = useState([]);
  

  

const fetchData = async () => {
  try {
      const response = await axios.get('http://localhost:3000/api/clients');
      setTableData(response.data);
  } catch (err) {
      setError(err.message);
  }
};

useEffect(() => {
    
  fetchData();
},[]);

  const handleOpen = (mode, client)=>{
    setClientData(client);
    setModelMode(mode);
    setIsOpen(true);
  }

  const handleSubmit = async(newClientData)=>{

    if(modelMode==='add'){

      try{
        const response= await axios.post('http://localhost:3000/api/clients', newClientData);
        console.log('Client added:', response.data);
        setTableData((prevData)=>[...prevData, response.data]);
      }
      catch(e){
        console.log('Error adding client', e);
      }


      console.log('model mode Add');
    }
    else{
      console.log('Updating Client with ID:',clientData.id);

      try{
        const response= await axios.put(`http://localhost:3000/api/clients/${clientData.id}`, newClientData);
        console.log('Client updated:', response.data);
        setTableData((prevData)=>
          prevData.map((client)=> client.id===response.data.id ? response.data : client)
      );

      }
      catch(e){
        console.log('Error updating client', e);
      }
    }
  }

  return (
    <>
     <NavBar onOpen={()=> handleOpen('add')} onSearch={setSearchTerm}/>
     <TableList setTableData={setTableData} tableData={tableData} 
     handleOpen={handleOpen} searchTerm={searchTerm}/>
     <ModelForm 
     isOpen={isOpen} 
     onSubmit={handleSubmit}
     onClose={()=>setIsOpen(false)}
     mode={modelMode} clientData={clientData}/>
    </>
  )
}

export default App;
