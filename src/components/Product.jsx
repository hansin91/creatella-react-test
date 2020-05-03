import React, { Fragment } from 'react'
import { formatCurrency, parseDateIntoRelativeTime } from '../common/helper'

function Product({ product, index }) {
  const faceSize = {
    fontSize: product.size + 'px'
  }
  return (
    <Fragment>
      <div className="col-md-3 mb-4">
        <div className="card shadow-sm">
          <div className="product-face text-center" style={faceSize}>{product.face}</div>
          <div className="product-detail">
            <table>
              <tbody>
                <tr><td className="font-weight-bolder">Id</td><td>&nbsp;:&nbsp;</td><td>{product.id}</td></tr>
                <tr><td className="font-weight-bolder">Price</td><td>&nbsp;:&nbsp;</td>
                  <td>{formatCurrency(product.price)}</td>
                </tr>
                <tr><td className="font-weight-bolder">Added</td><td>&nbsp;:&nbsp;</td><td>{parseDateIntoRelativeTime(product.date)}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {index > 0 && (index % 20 ===0) && <div className="col-md-12">Ads</div>}
    </Fragment>
  )
}

export default Product