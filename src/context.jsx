import { createContext, useContext,useReducer,useEffect } from "react";
import { reducer } from "./reducer";

const AppContext= createContext();

const initialState={
    query:"React",
    nbPages:0,
    page:0,
    hits:[],
    isloading:true,
}
const AppProvider=({children})=>{
const [state, dispatch] = useReducer(reducer, initialState);

const getNews=async(url)=>{
    dispatch({type:"SET_LOADING"})
    try{
      console.log("calling fetch");
     const res= await fetch(url);
     const data= await res.json();
     dispatch({type:"GETNEWS",payload:{
        hits:data.hits,
        nbPages:data.nbPages
     }})
    }
    catch(err){
      console.log(err);
    }
  }
  
  
  useEffect(()=>{
    let timer=setTimeout(() => {
      getNews(`${import.meta.env.VITE_URL}query=${state.query}&page=${state.page}`);
    },800);
    return  () => clearTimeout(timer);
  },[state.query,state.page]);

  //removie post function
  const removePost=(postID)=>{
    dispatch({type:"REMOVE_POST",payload:postID})
  }

  //searching the post
  const searchPost=(searchquery)=>{
    dispatch({type:"SEARCH_POST",payload:searchquery})
  }

  //pagination function
  const getnextPage=()=>{
    dispatch({type:"NEXT_PAGE" });
  };
  const getprevPage=()=>{
    dispatch({type:"PREV_PAGE"});
  };
 return <AppContext.Provider value={{...state,removePost,searchPost,getnextPage,getprevPage}}>
    {children}
 </AppContext.Provider>
};
const useGlobalContext=()=>{
    return useContext(AppContext);
};
export {AppContext,AppProvider,useGlobalContext};