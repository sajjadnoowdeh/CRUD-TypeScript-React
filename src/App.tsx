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

  const addData= (fName:string,lName:string,address:string)=>{
    setStorage([...storage,{firstname:fName,lastname:lName,address:address,id:Date.now()}])
  }
  const handleAdd=()=>{
    addData(formValue!.firstname,formValue!.lastname,formValue!.address)
    setFormValue(undefined)
  }
  useEffect(()=>{
        console.log(storage);
        
  },[storage])
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
          <button type="button" className="btn btn-secondary w-100" onClick={handleAdd}>
            ADD
          </button>
        </div>
        <div className="mt-4">
          <DataTable
           setStorage={setStorage}
           data={storage}
           />
        </div>
      </div>
    </>
  );
}

export default App;
