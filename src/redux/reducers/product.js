import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_ERROR,
  INCREMENT_PAGE,
  SET_PRODUCT_SORTED,
  SET_IS_SORTING_LOADING,
  SET_IS_SORTED } from '../actions'

const initialState = {
  products: [],
  isLoading: null,
  error: '',
  page: 1,
  productCount: 500,
  isSorted: false,
  isSortingLoading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_IS_SORTING_LOADING:
      return {
        ...state,
        isSortingLoading: action.payload
      }
    case SET_IS_SORTED:
      return {
        ...state,
        isSorted: action.payload,
        page: 1
      }
    case SET_PRODUCT_SORTED:
      return {
        ...state,
        products: action.payload,
      }
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