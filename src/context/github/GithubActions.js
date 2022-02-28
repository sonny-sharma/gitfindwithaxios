import axios from 'axios';
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const githubAxios = axios.create({
  baseURL: GITHUB_URL
})


// For Search Users
export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q:text,
  })
 
  const result = await githubAxios.get(`/search/users?${params}`);
    return result.data.items;


}



// For particular user 
export const getUser = async (login) => {
 
  const result = await githubAxios.get(`/users/${login}`);

  if(result.status ===404){
    window.location ='/notfound';
  } else {
    
    return result.data;
  }
}

// For user Repos
export const getUserRepos = async (login) => {

  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

 
  const result = await githubAxios.get(`/users/${login}/repos?${params}`);

  
  return result.data;

}
