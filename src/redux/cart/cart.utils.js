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
