import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, CHANGE_NAME, CHANGE_PAGENUM, FETCH_DATA_ON_SCROLL_SUCCESS ,ADD_T0_FAV } from './actions'

const initialState = {
    data: [],
    beerName: 'a',
    pagination: {
        page: 2,
        perPage: 20,
        totalPages: 1
    },
    favourites: []
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            console.log(action.query)
            return state
        case FETCH_FAILURE:
            console.log(action.query)
            return state
        case FETCH_SUCCESS:
            console.log(action.payload.data)
            return {
                ...state,
                data: action.payload.data
            }
        case CHANGE_NAME:
            return {
                ...state,
                beerName: action.payload,
                pagination: { ...state.pagination, page: 1, totalPages: 1 }
            }
        case CHANGE_PAGENUM:
            let pageNum = state.pagination.page
            pageNum++
            return {
                ...state,
                pagination: { ...state.pagination, page: pageNum }
            }
        case FETCH_DATA_ON_SCROLL_SUCCESS:
            console.log(action.payload.data)
            let dataOld = state.data
            // dataOld= dataOld.filter(e=>action.payload.data.forEach(ele=>ele.id!==e.id))
            return {
                ...state,
                data: [...dataOld, ...action.payload.data]
            }
        case ADD_T0_FAV:
            let oldFavs=state.favourites
            return{
                ...state,
                favourites:[...oldFavs,action.payload]
            }
        default:
            return state
    }
}
