import React from "react";
// import {IDataTable} from '../../types'
interface IDataTable{
  data:{
    id:number
    firstname:string
    lastname:string
    address:string
  }[]
  setStorage:Function
}
const DataTable:React.FC<IDataTable> = (props) => {
  // Remove data 
  const removeData = (id:number)=>{
       props.setStorage(props.data.filter((item)=> item.id !== id))
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
             props.data.map((item,index)=>(
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.address}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger ml-2" onClick={()=>removeData(item.id)}>Remove</button>
                </td>
              </tr>
             ))
        }
      
      
      </tbody>
    </table>
  );
};
export default DataTable;
