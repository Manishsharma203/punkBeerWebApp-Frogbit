import React, {useEffect} from 'react'
import {fetchData} from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import Cards from './Cards'
import SearchField from './SearchField'

export default function Dashboard() {
    // const dispatch = useDispatch()
    // const name = useSelector(state=>state.beerName)
    // const pagination= useSelector(state=>state.pagination)
    // // useEffect(() => {
    // //     dispatch(fetchData(`https://api.punkapi.com/v2/beers`))
    // // }, [])

    // useEffect(() => {
    //     dispatch(fetchData(`https://api.punkapi.com/v2/beers?beer_name=${name}&page=${pagination.page}&per_page=${pagination.perPage}`))
    // }, [name])

    return (
        <div>
            <SearchField/>
            <Cards/>
        </div>
    )
}
