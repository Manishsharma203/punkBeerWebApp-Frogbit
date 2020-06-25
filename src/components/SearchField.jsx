import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {changeName} from '../redux/actions'

export default function SearchField() {
    const dispatch = useDispatch()

    const [name,setName] = useState('')
    
    const changeHandler=(e)=>{
        setName(e.target.value)
    }
    const addname=()=>{
        if(name!==''){
            dispatch(changeName(name))
        }
    }
    return (
        <div>
            <div className='m-5 d-flex'>
                <input value={name} onChange={changeHandler} />
                <button className='btn btn-primary' onClick={addname}>Search</button>
            </div>
        </div>
    )
}
