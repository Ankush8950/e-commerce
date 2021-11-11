import React ,{ useContext }  from 'react'
import style from "../Card/Card.module.css"
import arrow from "../image/arrow-left.png"
import cart from "../image/shopping-cart.png"
import { Scrollbars } from 'react-custom-scrollbars';
import { Data } from "../Card/Cardapi"
import Item from './Item';
import { cartContext } from './Card';
import { BiRupee } from "react-icons/bi";



const ContextCart = () => {
//   const [item, setItem] = useState(Data);

  const { item,ClearCart } = useContext(cartContext);

 

    return (
        <>
           <div className={style.container}>
          <header>
          <div className={style.continue_shoping}>
            <img src={arrow} alt="arrow" className={style.arrow_icon} />
            <h3>Continue shoping</h3>
          </div>  
          
          <div className={style.card_icon}>
            <img src={cart} alt="cart" />
            <p>5</p>
          </div>
          </header>

          <section className={style.main_cart_section} >
            <h1>shopping cart</h1>
            <p>you have <span>7</span> items in shopping cart</p>


            <div className={style.cart_item}>
               <Scrollbars>
                {
                    item.map((curItem)=>{
                      return <Item key={curItem.id} {...curItem} />
                  })
                }
                </Scrollbars>
            </div>
          </section>
          <div className={style.btn_cart}> 
                <h1>Cart total:2200<BiRupee /></h1>
                <div className={style.butt}>
                <button>CHECKOUT</button>
                <button className={style.clear_cart} onClick={ClearCart} >Clear Cart</button>
                </div>
          </div>
          </div>  
        </>
    )
}

export default ContextCart;
