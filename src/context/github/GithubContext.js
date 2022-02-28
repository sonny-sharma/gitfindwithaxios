import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({children})=>{
  const initialState = {
    users: [],
    user:{},
    repos:[],
   loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer,initialState)

// Get Initial Users(testing purpose)
  // const fetchUsers = async () => {

  //   setLoading();
   
  //   const result = await fetch(`${GITHUB_URL}/users`);

  //   const data = await result.json();
  //  dispatch({
  //    type:'GET_USERS',
  //    payload: data,
  //    loading:false,
  //  })
  // }


 return(
    <GithubContext.Provider value={{
     ...state,
     dispatch,
     
    }}>
      {children}
    </GithubContext.Provider>
  )

}


export default GithubContext;