
const redditURl = "https://www.reddit.com/r/popular.json";
const redditSubURI = "https://www.reddit.com/r/";
const authOToken = process.env.REACT_APP_AUTH_TOKEN





async function checkAndReturn(response) {
    if (response.ok) {
        const jsonResp = await response.json();
        return jsonResp;
    } else {
        return { status: response.status, statusText: response.statusText };
    }
}
const posts = {

    async all() {
        const resp = await fetch(`${redditURl}`);
        const data = await checkAndReturn(resp)
        return data;
    },
    async subredditApiCall (subbreddit) {
        const response = await fetch(`${redditSubURI}${subbreddit}/.json`);
        const data = await checkAndReturn(response);
        return data;
    },


}

const api = { posts }
export default api

// export the funcation 