import React from 'react'
import { Orderacoridian } from './Orderacoridian'
import { Ordercard } from './Ordercard'
import { Orderfooter } from './Orderfooter'
import { Order_header } from './Order_header'

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
