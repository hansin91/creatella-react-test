import { SET_LOADING, SET_ERROR, SET_PRODUCTS, INCREMENT_PAGE } from './types'
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

export const incrementPage = () =>({
  type: INCREMENT_PAGE
})

export const loadProducts = (params) => (dispatch) => {
  dispatch(setLoading(true))
  const page = params.page
  const limit = params.limit
  api({
    method: 'GET',
    url: 'api/products?_page='+page+'&_limit='+limit,
    responseType: 'json'
  })
  .then(({ data }) => {
    dispatch(setError(''))
    dispatch(setProducts(data))
  })
  .catch((err) => dispatch(err.response.data))
  .finally((_) => dispatch(setLoading(false)))
}