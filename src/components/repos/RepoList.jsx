import React from 'react'
import RepoItem from './RepoItem'


const RepoList = ({repos}) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="my-4 text-3xl font-bold card-title">
          Latest Repos
        </h2>
        {repos.map((repo)=>(
          <RepoItem key={repo.id} repo={repo}/>
        ))}
      </div>
    </div>
  )
}

export default RepoList