import { useEffect } from 'react'
import React, { ChangeEvent } from 'react'
import {IFormValue} from '../../types'
import { cursorTo } from 'readline'
import { type } from 'os'
interface Iinputs{
 name:string,
 lableInput:string
 helpText?:string
 formValue: IFormValue  | undefined
 setFormValue: Function

}
const Inputs:React.FC<Iinputs> =(props)=> {
    const [carrentValue,setCurrentVal] = React.useState<string>('')
    const handleChange = (e:React.ChangeEvent) =>{
        let inputEl = e.target as HTMLInputElement;
        setCurrentVal(inputEl.value)
        
    }
    useEffect(() => {
        console.log(typeof props.formValue?.firstname);
        
     if(props.formValue?.firstname === undefined && props.formValue?.lastname === undefined && props.formValue?.address === undefined){
         setCurrentVal("")
     }
    }, [props.formValue])
    useEffect(() => {
      (carrentValue.length > 0) && props.setFormValue({...props.formValue,[props.name]:carrentValue})
    }, [carrentValue])
    return (
        <div className="form-group">
            <label htmlFor="exampleInputText1">{props.lableInput}</label>
            <input 
             value={carrentValue}
             onChange={(e)=>handleChange(e)}
             type="text"
             className="form-control"
             id={`${props.name}Help`}
             aria-describedby={`${props.name}Help`}/>
            <small id={`${props.name}Help`} className="form-text text-muted">{props.helpText}.</small>
        </div>
    )
}
export default Inputs;
