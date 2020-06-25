import React, { useEffect } from 'react'
import { fetchData, changePageNum, fetchDataonScroll } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import SingleCard from './SingleCard'

export default function Cards() {
    const dispatch = useDispatch()
    
    // fetching data from redux
    const data = useSelector(state => state.data)
    const name = useSelector(state => state.beerName)
    const pagination = useSelector(state => state.pagination)

    console.log('data', data.length)

    // Initial data fetching which also renders with changes in the name query
    useEffect(() => {
        dispatch(fetchData(`https://api.punkapi.com/v2/beers?beer_name=${name}&page=1&per_page=${pagination.perPage}`))
    }, [name])


    // fetching data for the succesive scroll events i.e. with inifinte scrolling pagination while changing the page query
    const fetchnewData = () => {
        dispatch(changePageNum(pagination.page));
        console.log('page',pagination.page)
        dispatch(fetchDataonScroll(`https://api.punkapi.com/v2/beers?beer_name=${name}&page=${pagination.page}&per_page=${pagination.perPage}`))
     }
    return (
        <div>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchnewData}
                hasMore={true}
                loader={<h4>...</h4>}
                >
                <SingleCard data={data}/>
                </InfiniteScroll>
        </div>
    )
}
