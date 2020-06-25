import React from 'react'
import { useDispatch } from 'react-redux'
import {addToFavs,removeFavs} from '../redux/actions'

export default function SingleCard(props) {
    const dispatch = useDispatch()
    return (
        <div>
            {props.data && props.data
                    .map(e =>
                        <div className='my-5 d-flex flex-wrap' key={e.id}>
                            <div className='col-12 d-flex flex-sm-row flex-column align-items-center justify-content-center mx-auto border rounded'>
                                <div className='col-sm-2'>
                                    <img className='col-sm-12 col-10' style={{ height: '200px', width: 'auto' }} src={e.image_url} alt='NoImage' />
                                </div>
                                <div className='col-sm-8 mt-3'>
                                    <div className='h2'>{e.name}</div>
                                    <div className='text-monospace'>Author :  {e.contributed_by}</div>
                                    <div className='h5'>{e.description} ...</div>
                                    <div className='d-flex justify-content-between my-3'>
                                        <div>First Brewed : {e.first_brewed}</div>
                                        {e.fav?
                                        <div><button className='btn btn-outline-danger' onClick={()=>dispatch(removeFavs(e))}>Remove from favourites</button></div>
                                        :
                                        <div><button className='btn btn-outline-success' onClick={()=>dispatch(addToFavs(e))}>Add to favourites</button></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
        </div>
    )
}
