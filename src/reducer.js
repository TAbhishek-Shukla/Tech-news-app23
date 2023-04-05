
export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isloading: true,
            };

        case "GETNEWS":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isloading:false,
            };
            
        case "REMOVE_POST" :
            return{
                ...state,
                hits:state.hits.filter((elem)=> elem.objectID !== action.payload
                ),
            };
        case "SEARCH_POST" :
            return{
                ...state,
                query:action.payload
            };
        
         case "PREV_PAGE":
            let pageno=state.page;

            if(pageno <= 0){
                pageno=0;
            }
            else[
             pageno= pageno-1
            ]
            
            return {
                 ...state,
                 page:pageno
            };
            case "NEXT_PAGE":
                let pagenum=state.page+1;

                if(pagenum >= state.nbPages){
                    pagenum=0;
                }
                return {
                     ...state,
                     page:pagenum
                };
    }

    return state;
};