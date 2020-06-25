import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {changeName} from '../redux/actions'

export default function SearchField() {
    const dispatch = useDispatch()

    // setting the beer name query in redux state
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
            <div className='m-5 d-flex justify-content-center'>
                <div className='h4 mx-2'>Search Beers</div>
                <input value={name} onChange={changeHandler} placeholder='Enter the name' />
                <button className='btn btn-primary mx-2' onClick={addname}>Search</button>
            </div>
        </div>
    )
}
