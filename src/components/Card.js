import React, {useEffect, useRef, useState} from 'react';
import {useCart, useDispatchCart} from './ContextReducer';


export default function Card(props) {
    let priceOptions = Object.keys(props.data.options[0]);
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    let finalPrice = qty * parseInt(props.data.options[0][size]);
    

    const handleAdd = async () => {
      let food=[];
      for(const item of data){
        if(item.id===props.data._id){
          food=item;
          break;
        }
        
      }

      if(food!=[]){
        if(food.size===size){
          await dispatch({
            type:"UPDATE",
            id: props.data._id,
            price: finalPrice,
            qty:qty
          })
          return 
        }else if(food.size!==size){
          await dispatch({
            type: "ADD",
            id: props.data._id,
            name: props.data.name,
            price: finalPrice,
            img: props.data.img,
            qty: qty,
            size: size
        });
        return ;
        }

      }
      await dispatch({
        type: "ADD",
        id: props.data._id,
        name: props.data.name,
        price: finalPrice,
        img: props.data.img,
        qty: qty,
        size: size
    });
       
    }

    // console.log(options[size]);
    // console.log(size);
    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])


    return (
        <div className="card mt-3"
            style={
                {
                    "width": "18rem",
                    "maxHeight": "800px"
                }
        }>
            <img className="card-img-top"
                src={
                    props.data.img
                }
                alt="Card image cap"
                style={
                    {
                        "height": "200px",
                        "objectFit": "fill"
                    }
                }/>
            <div className="card-body">
                <h5 className="card-title">
                    {
                    props.data.name
                }</h5>
                <p className="card-text">
                    {
                    props.data.description
                }</p>
                <div className="container w-100">
                    <select className='m-2 h-100 bg-success rounded'
                        onChange={
                            (e) => setQty(e.target.value)
                    }>
                        {
                        Array.from(Array(6), (e, i) => {
                            return (
                                <option key={
                                        i + 1
                                    }
                                    value={
                                        i + 1
                                }>
                                    {
                                    i + 1
                                }</option>
                            )
                        })
                    } </select>

                    <select className='m-2 h-100 bg-success rounded'
                        ref={priceRef}
                        onChange={
                            (e) => setSize(e.target.value)
                    }>

                        {
                        priceOptions.map(portion => {
                            return <option value={portion}>
                                {portion}</option>

                    })
                    } </select>
                    <div className='d-inline h-100 fs-5'>
                        Total Price: Rs. {finalPrice} </div>
                    <hr/>
                    <button className="btn btn-success justify-center ms-2"
                        onClick={handleAdd}>Add to cart</button>
                </div>

            </div>
        </div>

    )
}
