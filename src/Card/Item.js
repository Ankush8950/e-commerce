import React, { useContext } from 'react'
import style from "./Card.module.css"
import { MdDelete } from "react-icons/md";
import { cartContext } from './Card';


const Item = ({id,description ,title, imgsrc, price,quantity}) => {

    const { removeIcon,increment,decrement } = useContext(cartContext);

    return (
        <>
           <div className={style.cart_items_container}>
                    <div className={style.product_img}>
                        <img src={imgsrc} alt="imag" />
                    </div>

                    <div className={style.title}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>

                    <div className={style.add_minu_quanity}> 
                         <i className="ri-subtract-line" onClick={() => decrement(id)} ></i>
                         <input type="text" placeholder={quantity} />
                         <i className="ri-add-fill" onClick={() => increment(id)} ></i>
                    </div>

                    <div className={style.price}>
                      <h3>{price}</h3>
                    </div>

                    <div className={style.removeIcon}>
                        <MdDelete onClick={() => removeIcon(id)} />
                    </div>  
                    {/* <div className={style.show_text}>
                        <h1>Remove <br/>Item</h1>
                    </div> */}
                </div>
                 
        </>
    )
}

export default Item;
