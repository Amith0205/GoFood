import React, { createContext,useContext,useReducer } from 'react';


const cartStateContext=createContext();
const cartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,img:action.img,size:action.size}]

        case "REMOVE":
            let newArr=[...state];
            newArr.splice(action.index,1);
            return newArr;

        case "UPDATE":
            let arr=[...state];
            arr.find((food,index)=>{
                if(food.id===action.id){
                    arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:action.price+food.price}
                }
                
            })
            return arr;

        case "DROP":
            let empArr=[];
            return empArr;
        default:
        console.log("Error in reducer");
    }
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
    return (
        <cartDispatchContext.Provider value={dispatch}>
        <cartStateContext.Provider value={state}>
        {children}
        </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}
export const useCart=()=>useContext(cartStateContext);
export const useDispatchCart=()=>useContext(cartDispatchContext);
