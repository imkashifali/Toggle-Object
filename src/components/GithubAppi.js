import React from 'react'
import { UserGithub } from './userGithub'

function GithubAppi() {
    const [user, followers, loading, list, fetchfollowers] = UserGithub();
    // console.log('user',user);
    console.log('fetchfollowers', followers);

    return (
        <div>
            <ul>
                Navbar
                {list.map((item) => {
                return (
                    <li>
                        {/* <Link to={item.router}>{item.title}</Link> */}
                        <a href={item.router}>{item.title}</a>
                    </li>
                )
            })}
            </ul>



            github UserNAME:{user?.login}
            <p>{user?.login} followers{user?.followers}</p>
            <button onClick={fetchfollowers}>Get Followers</button>
            <hr></hr>
            <p>followers Listing</p>
            {loading && <p>loading......</p>}
            {followers?.map((follower, key) => {
                return <p key={key}>name:{follower.login}</p>
            })}
            <p>Login:</p>

        </div>
    )
}

export default GithubAppi
