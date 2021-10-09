import axios from "axios"

const baseURL = "https://hacker-news.firebaseio.com/v0/"

export const getPage = (page) => {
    console.log("enter", page)
    return axios.get(`${baseURL + page}.json`)

}

export const getNews = (id) => {
    return axios.get(`${baseURL}/item/${id}.json`)
}








