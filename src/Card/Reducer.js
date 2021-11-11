import { act } from "react-dom/test-utils";

// remove item section 
export const reducer = (state,action) =>{
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item:state.item.filter((curElem) =>{
                return curElem.id != action.payload;
            }),
        }
    }

// Clear the all data 
    if(action.type === "CLEAR_CART"){
        return {...state, item:[] }
    }

// update cart 
    if(action.type === "INCREMENT"){
        let updateCart = state.item.map((curElm) =>{
            if(curElm.id === action.payload){
                return {...curElm, quantity: curElm.quantity+1 }
            }
            return curElm;
        }) 
        return {...state, item: updateCart};
    }

    if(action.type === "DECREMENT"){
        let updateCarts = state.item.map((curEleem)=>{
            if(curEleem.id === action.payload){
                return {...curEleem, quantity:curEleem.quantity-1}
            }
            return curEleem;
        }).filter((curElm)=>{
            return curElm.quantity !=0; 
        })
        return {...state, item: updateCarts}
    }

    if(action.type === "GET_TOTAL"){
        let { totalItem } = state.item.reduce((accum, currVal) => {
            let { quantity } = currVal;
            accum.totalItem += quantity;
            return accum;
        } 
        ,{
            totalItem: 0,
        } );
        return { ...state, totalItem };
    }


    return state;
}