


export const Add =(product,title)=>{
      
 return{
    type:"add",
    pyload:product,
    title:title
 }
}


export const AddCart =(product)=>{
      
   return{
      type:"AddCart",
      pyload:product,
   
   }
  }

  
export const DeletCart =(product)=>{
      
   return{
      type:"DeletCart",
      pyload:product,
   }
  }