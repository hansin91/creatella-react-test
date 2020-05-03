import { SET_LOADING, SET_PRODUCTS, SET_ERROR, INCREMENT_PAGE } from '../actions'

const initialState = {
  products: [],
  isLoading: null,
  error: '',
  page: 1,
  productCount: 500
}

export default function(state = initialState, action) {
  switch(action.type) {
    case  INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload]
      }
    default:
      return state
  }
}