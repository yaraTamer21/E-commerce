
let  Containe =null;
let Title=""
export const HandleReducer = (state = Containe, action) => {
    switch (action.type) {
        case "add": return (
            {
                Containe:action.pyload,
                Title:action.title
                
            }
         
            
            );

        default: return Containe

    }



}