import React, { useEffect } from 'react'
import { fetchData, changePageNum, fetchDataonScroll, addToFavs } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './card.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Cards() {
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    const name = useSelector(state => state.beerName)
    const pagination = useSelector(state => state.pagination)

    console.log('data', data.length)

    useEffect(() => {
        dispatch(fetchData(`https://api.punkapi.com/v2/beers?beer_name=${name}&page=1&per_page=${pagination.perPage}`))
    }, [name])


    const fetchnewData = () => {
        dispatch(changePageNum(pagination.page));
        console.log('page',pagination.page)
        dispatch(fetchDataonScroll(`https://api.punkapi.com/v2/beers?beer_name=${name}&page=${pagination.page}&per_page=${pagination.perPage}`))
     }
    return (
        <div>
            <InfiniteScroll
                dataLength={data.length} //This is important field to render the next data
                next={fetchnewData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                >
                {data && data
                    .map(e =>
                        <div className='my-5 d-flex flex-wrap' key={e.id}>
                            <div className='col-12 d-flex flex-sm-row flex-column align-items-center justify-content-center mx-auto border rounded'>
                                <div className='col-sm-4'>
                                    <img className='col-sm-12 col-10' style={{ height: '200px', width: 'auto' }} src={e.image_url} alt='NoImage' />
                                </div>
                                <div className='col-sm-8 mt-3'>
                                    <div className={styles.title}>{e.name}</div>
                                    <div className={styles.author}>Author :  {e.contributed_by}</div>
                                    <div className={styles.des}>{e.description} ...</div>
                                    {/* <div className='btn btn-success my-2'><a className='text-white' href={e.url} target='blank'>Read it here</a></div> */}
                                    <div className='d-flex justify-content-between my-3'>
                                        <div className={styles.footer}>First Brewed : {e.first_brewed}</div>
                                        <div className={styles.footer}><button className='btn' onClick={()=>dispatch(addToFavs(e))}>Add to favs</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                </InfiniteScroll>
        </div>
    )
}
