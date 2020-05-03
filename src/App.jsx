import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles/index.scss'
import ProductList from './components/ProductList'
import Loading from './components/Loading'
import { loadProducts, incrementPage } from './redux/actions'
import { LIMIT } from './common/config'

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.product.isLoading)
  const products = useSelector(state => state.product.products)
  const page = useSelector(state => state.product.page)

  useEffect(() => {
    dispatch(loadProducts({ page, limit: LIMIT }))
  },[page])

  window.onscroll = () => {
    if (products.length < 500 && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (!isLoading) {
        dispatch(incrementPage())
      }
    }
  };

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        {products && <ProductList products={products} />}
        {isLoading && <Loading />}
      </div>
    </div>
  )
}

export default App