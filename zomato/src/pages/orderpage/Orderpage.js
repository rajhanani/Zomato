import React from 'react'
import { Orderacoridian } from '../../components/orderpage/order_accoridian/Orderacoridian'
import { Ordercard } from '../../components/orderpage/ordercard/Ordercard'
import { Orderfooter } from '../../components/orderpage/order_footer/Orderfooter'
import { Order_header } from '../../components/orderpage/order_hed/Order_header'

export const Orderpage = () => {
  return (
    <div>
        <Order_header/>
        <Ordercard/>
        <Orderacoridian/>
        <Orderfooter/>
    </div>
  )
}
