import axios from 'axios'

//action types
export const FETCH_REQUEST= 'FETCH_REQUEST'
export const FETCH_SUCCESS='FETCH_SUCCESS'
export const FETCH_FAILURE='FETCH_FAILURE'
export const CHANGE_NAME='CHANGE_NAME'
export const CHANGE_PAGENUM='CHANGE_PAGENUM'
export const FETCH_DATA_ON_SCROLL_SUCCESS='FETCH_DATA_ON_SCROLL_SUCCESS'
export const ADD_T0_FAV='ADD_T0_FAV'

//actions
export const fetchReq=query=>({
    type:FETCH_REQUEST,
    query
})

export const fetchSuccess=payload=>({
    type:FETCH_SUCCESS,
    payload
})

export const fetchFail=query=>({
    type:FETCH_FAILURE,
    query
})

export const fetchData=(url)=>{
    return dispatch=>{
        dispatch(fetchReq('Fetching Request'))
        return axios.get(url)
            // .then(res=>console.log(res))
            .then(res=>dispatch(fetchSuccess(res)))
            .catch(err=>dispatch(fetchFail(err)))
    }
}

export const changeName=payload=>({
    type:CHANGE_NAME,
    payload
})

export const changePageNum=payload=>({
    type:CHANGE_PAGENUM,
    payload
})

export const fetchDataOnScrollSuccess=payload=>({
    type:FETCH_DATA_ON_SCROLL_SUCCESS,
    payload
})
export const fetchDataonScroll=(url)=>{
    console.log(url)
    return dispatch=>{
        dispatch(fetchReq('Fetching Request'))
        return axios.get(url)
            // .then(res=>console.log(res))
            .then(res=>dispatch(fetchDataOnScrollSuccess(res)))
            .catch(err=>dispatch(fetchFail(err)))
    }
}
export const addToFavs=payload=>({
    type:ADD_T0_FAV,
    payload
})