
 

 const cart=[]

 export const HandleCart = (state=cart,action) => {
    let product=action.pyload

     switch(action.type){

        case 'AddCart':
          let exists= state.find((x)=>x.id=== product.id )
         if(exists)
         {
            return state.map((x)=>x.id===product.id? {...x ,qty: x.qty+1} :x)

         }
         else 
         {
            return [...state , {...product , qty:1} ]
         }
         case 'DeletCart':
           
          let  befor= state.find((x)=>x.id=== action.pyload.id )
             if (befor.qty>1){
              return    state.map((value,index)=> value.id === action.pyload.id ? {...value, qty:value.qty-1}:value )
             }
             else if (befor.qty===1) 
             {
                return state.filter((value,index)=>value.id!==action.pyload.id)
               
             }
 
             
 default:return state


        

     } 
      
 
}

