export const AddItemToCart=(cartitems,addnewitem)=>{
    const existitem=cartitems.find(cartitem=>cartitem.id===addnewitem.id)

    if(existitem){
        return (
            cartitems.map(cartitem=>
                cartitem.id===addnewitem.id
                ?{...cartitem,quantity:cartitem.quantity+1}
                :cartitem
                )
        )
    }
return [...cartitems,{...addnewitem,quantity:1}]

};

export const RemoveItemFromCheckout=(cartitems, cartitemtoberemoved)=>{
 const existingitem = cartitems.find(
     cartitem=>cartitem.id===cartitemtoberemoved.id
     )
 if(existingitem.quantity===1)
 {
     return cartitems.filter(
         cartitem=> cartitem.id !== cartitemtoberemoved.id
         )
 }

 return cartitems.map((cartitem)=>cartitem.id===cartitemtoberemoved.id
                                  ? {...cartitem,quantity:cartitem.quantity-1}
                                  : cartitem
                                  )

};