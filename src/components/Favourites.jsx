import React from 'react'
import { useSelector } from 'react-redux'
import styles from './card.module.css'

export default function Favourites() {
    const favourites = useSelector(state=>state.favourites)
    return (
        <div>{favourites && favourites.map(e=>
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
                            {/* <div className={styles.footer}>{new Date(Date.parse(e.publishedAt)).toDateString()}</div> */}
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
