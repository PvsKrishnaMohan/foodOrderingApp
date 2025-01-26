import React from 'react'
import ItemCards from './ItemCards'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../Utils/CartSlice'

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()
    // console.log(cartItems,"ci")
    const clearCart = () => {
        dispatch(emptyCart())
    }
    
  return (
    <div className='flex flex-col items-center justify-center m-4 p-4'>
        <h1 className='text-bold-400 text-2xl text-center'>My Cart</h1>
        <button className='p-2 m-2 rounded shadow-lg bg-black text-slate-50' onClick={clearCart}>Clear Cart</button>
       
        <div className="bg-gray-50 rounded-lg text-center shadow-2xl border-2 w-6/12 m-2 p-2">
         {cartItems.length ===0 ? <h1>Your Cart is empty</h1> : <ItemCards ItemList={cartItems}/>}
        </div>
    </div>
  )
}

export default Cart