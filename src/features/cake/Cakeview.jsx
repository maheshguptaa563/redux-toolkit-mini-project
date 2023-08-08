import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {ordered, restocked} from './cakeSlice'

 const Cakeview = () => {
  const numOfCakes = useSelector((state) => state.cake.numofCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}

export default Cakeview