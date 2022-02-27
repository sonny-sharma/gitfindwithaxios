import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;


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


// For Search Users
  const searchUsers = async (text) => {

    setLoading();

    const params = new URLSearchParams({
      q:text,
    })
   
    const result = await fetch(`${GITHUB_URL}/search/users?${params}`);

    const {items} = await result.json();
   dispatch({
     type:'GET_USERS',
     payload: items,
    
  })

}


// For particular user 
const getUser = async (login) => {

  setLoading();

 
 
  const result = await fetch(`${GITHUB_URL}/users/${login}`);

  if(result.status ===404){
    window.location ='/notfound';
  } else {
    const data = await result.json();

    dispatch({
      type:'GET_USER',
      payload: data,
     
   })

   console.log(data);
  }



}

// For user Repos
const getUserRepos = async (login) => {

  setLoading();

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

 
  const result = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);

  const data = await result.json();
 dispatch({
   type:'GET_REPOS',
   payload: data,
  
})

}


    // Set Loading
    const setLoading = () => {
      dispatch({
        type: 'SET_LOADING',
      })
    }

    // for clear Users

    const clearUsers = ()=>{
      dispatch({
        type: 'CLEAR_USERS',
      })
    }
  


 return(
    <GithubContext.Provider value={{
      users:state.users,
      user:state.user,
      loading:state.loading,
      repos:state.repos,
      clearUsers,
      searchUsers,
      getUser,
      getUserRepos,
    }}>
      {children}
    </GithubContext.Provider>
  )

}


export default GithubContext;