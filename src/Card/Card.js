import React,{ createContext, useReducer,useEffect } from 'react'
import { Data } from "../Card/Cardapi"
import ContextCart from "../Card/ContextCart"
import { reducer } from './Reducer';

export const cartContext = createContext();

const initialState = {
  item: Data,
  totalAmount: 0,
  totalItem: 0,
}

const Card = () => {
  // const [item, setItem] = useState(Data);
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeIcon = (id) =>{
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id
    })
  }

  const ClearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
      
    })
  }

  const increment = (id) =>{
    return dispatch({
      type: "INCREMENT",
      payload: id
    })
  }

  const decrement = (id) =>{
    return dispatch({
      type: "DECREMENT",
      payload: id
    })
  }

  useEffect(() => {
   dispatch({ type: "GET_TOTAL"})
   console.log("Alxnvkl");
  }, [state.item])

    return (
        <>
        <cartContext.Provider value={{...state,removeIcon,ClearCart,increment,decrement}}>
           <ContextCart />
        </cartContext.Provider>     
        </>
    )
}

export default Card;
