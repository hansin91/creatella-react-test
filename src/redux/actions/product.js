import {
  SET_LOADING,
  SET_ERROR,
  SET_PRODUCTS,
  INCREMENT_PAGE,
  SET_PRODUCT_SORTED,
  SET_IS_SORTED,
  SET_IS_SORTING_LOADING
} from './types'
import api from '../../common/api'

const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value
})

const setError = (value) => ({
  type: SET_ERROR,
  payload: value
})

const setProducts = (value) =>({
  type: SET_PRODUCTS,
  payload: value
})

const setProductSorted = (value) => ({
  type: SET_PRODUCT_SORTED,
  payload: value
})

const setIsSortingLoading = (value) => ({
  type: SET_IS_SORTING_LOADING,
  payload: value
})

export const setIsSorted = (value) => ({
  type: SET_IS_SORTED,
  payload: value
})

export const incrementPage = () =>({
  type: INCREMENT_PAGE
})

export const loadProducts = (params) => (dispatch) => {
  dispatch(setLoading(true))
  const page = params.page
  const limit = params.limit
  const sort = params.sort
  api({
    method: 'GET',
    url: 'api/products?_page='+page+'&_limit='+limit+'&_sort='+ sort,
    responseType: 'json'
  })
  .then(({ data }) => {
    dispatch(setError(''))
    dispatch(setProducts(data))
  })
  .catch((err) => dispatch(err.response.data))
  .finally((_) => dispatch(setLoading(false)))
}

export const sortProducts = (params) => (dispatch) => {
  dispatch(setIsSortingLoading(true))
  const page = params.page
  const limit = params.limit
  const sort = params.sort
  api({
    method: 'GET',
    url: 'api/products?_page='+page+'&_limit='+limit+'&_sort='+ sort,
    responseType: 'json'
  })
  .then(({ data }) => {
    dispatch(setError(''))
    dispatch(setProductSorted(data))
  })
  .catch((err) => dispatch(err.response.data))
  .finally((_) => dispatch(setIsSortingLoading(false)))
}