import React from "react";
import { useEffect } from "react";
import "./App.css";
import Inputs from "./components/Inputs/Inputs";
import {IFormValue} from "./types";
import DataTable from "./components/DataTAble/DataTable";
interface ISorage extends IFormValue{
  id:number
}

function App() {
  const [formValue, setFormValue] = React.useState<IFormValue>();
  const [storage,setStorage] = React.useState<ISorage[]>([])
  const [flagBtn,setFlagBtn] = React.useState<boolean>(true)
  const [dataID,setDataID] = React.useState<number>(0)
  const addData= (fName:string,lName:string,address:string)=>{
    setStorage([...storage,{firstname:fName,lastname:lName,address:address,id:Date.now()}])
  }
  const handleAdd=()=>{
    if(formValue){
      addData(formValue!.firstname,formValue!.lastname,formValue!.address)
      setFormValue(undefined)
    }
    
  }
  const handleEditData = (fName:string,lName:string,address:string)=>{
     setStorage(storage.map((item)=> item.id === dataID ? {firstname:fName,lastname:lName,address:address,id:dataID} : item)) 
     setFlagBtn(true) 
     setFormValue(undefined)
  }
  const setHandleEditData =()=>{
    handleEditData(formValue!.firstname,formValue!.lastname,formValue!.address)
  }
  return (
    <>
      <div className="container">
        <div className="w-50 mx-auto">
          <Inputs
            name={"firstname"}
            lableInput={"firstName"}
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <Inputs
            name={"lastname"}
            lableInput={"LastName"}
            helpText={"with enter lastname help to you"}
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <Inputs
            name={"address"}
            lableInput={"address"}
            helpText={"with enter lastname help to you"}
            formValue={formValue}
            setFormValue={setFormValue}
          />
          <button type="button" className={`btn  ${(flagBtn) ? 'btn-secondary' : 'btn-success'} w-100`}
             onClick={()=>(flagBtn) ? handleAdd() :setHandleEditData()}>
             {(flagBtn) ? "ADD" : "Save"}
          </button>
        </div>
        <div className="mt-4">
          <DataTable
           setStorage={setStorage}
           data={storage}
           setFlagBtn={setFlagBtn}
           setDataID={setDataID}
           />
        </div>
      </div>
    </>
  );
}

export default App;
