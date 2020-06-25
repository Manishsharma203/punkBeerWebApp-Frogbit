import React from 'react'
import { useSelector } from 'react-redux'
import SingleCard from './SingleCard'

export default function Favourites() {
    const favourites = useSelector(state=>state.favourites)
    return (
        <div>
            {favourites.length>0 ?
            <SingleCard data={favourites}/>:
            <div className='h1 text-center m-5'>You havent choose your favourite beers yet</div>
            }
        </div>
    )
}
