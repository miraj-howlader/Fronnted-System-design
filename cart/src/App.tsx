import { useState } from "react";
import "./App.css"
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const DEMO_ITEMS: CartItem[]=[
  {id:'p1',name:'Wirless Mouse',price:25,quantity:1},
  {id:'p2',name:'Mechanical Keyboard',price:43,quantity:2},
]

const App = () => {
  const [items,setItems] = useState<CartItem[]>(DEMO_ITEMS)

  const totalCount = items.reduce((sum,item)=>sum + item.quantity,0)
  const totalPrice = items.reduce((sum,item)=>sum + item.price*item.quantity,0)

  const removeIteml = (id:string)=>{
    setItems((prev)=>prev.filter((item)=>item.id !==id))
  }

  const clearCart = ()=>setItems([])


  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Cart</h1>
        </div>
      </header>

      <main className="main">
        <section className="panel">
          <div className="panel-top">
            <h1>Your Cart</h1>
            <span className="badge">Items: {totalCount}</span>
          </div>

          {
            items.length === 0 ? (
              <p>Cart is empty Add a product </p>
            ):(
              <ul className="list">
                {
                  items.map((item)=>(
                   <li className="row">
                     <span>
                      {item.name} x {item.quantity} - ${item.price * item.quantity}
                    </span>
                    <button
                    type="button"
                    onClick={()=>removeIteml(item.id)}
                    >
                      Remove
                    </button>
                   </li>
                  ))
                }
              </ul>
            )
          }

            {items.length > 0 ? (
            <div className="footer">
              <strong>Total: ${totalPrice}</strong>
              <button type="button" className="secondary" onClick={clearCart}>
                Clear cart
              </button>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  )
}

export default App