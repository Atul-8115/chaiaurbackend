const express = require('express')

require('dotenv').config()
const app = express()

const port = 4000

const githubData =  {
        "login": "Atul-8115",
        "id": 91093034,
        "node_id": "MDQ6VXNlcjkxMDkzMDM0",
        "avatar_url": "https://avatars.githubusercontent.com/u/91093034?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Atul-8115",
        "html_url": "https://github.com/Atul-8115",
        "followers_url": "https://api.github.com/users/Atul-8115/followers",
        "following_url": "https://api.github.com/users/Atul-8115/following{/other_user}",
        "gists_url": "https://api.github.com/users/Atul-8115/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Atul-8115/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Atul-8115/subscriptions",
        "organizations_url": "https://api.github.com/users/Atul-8115/orgs",
        "repos_url": "https://api.github.com/users/Atul-8115/repos",
        "events_url": "https://api.github.com/users/Atul-8115/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Atul-8115/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 39,
        "public_gists": 0,
        "followers": 0,
        "following": 6,
        "created_at": "2021-09-20T19:51:37Z",
        "updated_at": "2024-02-08T13:26:22Z"
        }

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/github', (req,res) => {
    res.json(githubData);
})
app.get('/twitter', (req,res) => {
    res.send('pandeyatulkumar')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})