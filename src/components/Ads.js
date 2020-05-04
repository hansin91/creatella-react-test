import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { generateRandomNumbers } from '../common/helper'
import { BASE_URL } from '../common/config'

function Ads() {
  const adKeys = useSelector(state => state.product.adKeys)
  const [randomAdKey, setRandomAdKey] = useState(0)
  const [loadingAds, setLoadingAds] = useState(true)
  useEffect(() => {
    let randomKey = ''
     do {
      randomKey = generateRandomNumbers(1, 1000)
      const isContain = adKeys.includes(randomKey)
      if (!isContain) {
        adKeys.push(randomKey)
        setRandomAdKey(randomKey)
        setLoadingAds(false)
      }
     }
    while (!adKeys.includes(randomKey))
  },[])

  return (
    <div className="col-md-12 text-center ads">
      {loadingAds && <div>Loading ....</div>}
      {!loadingAds && randomAdKey && <img src={BASE_URL + "ads/?r=" + randomAdKey} />}
    </div>
  )
}

export default Ads