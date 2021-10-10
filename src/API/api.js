import axios from "axios"

const baseURL = "https://hacker-news.firebaseio.com/v0/"

export const getPage = (page) => {
    console.log("enter", page)
    return axios.get(`${baseURL + page}.json`)
        .then((data) => {
            // console.log(data);
            return data
        })
        .catch(err => {
            return err
        })



}

export const getNews = (id) => {
    return axios.get(`${baseURL}/item/${id}.json`)
        .then((data) => {
            return data
        })
        .catch(err => {
            console.log("Error")
            return err
        })
}

export const getNewsLink = (link) => {
    return axios.get(link)
        .then((data) => {
            // console.log(data)
            return data
        })
        .catch(err => {
            console.log("Error")
            return err
        })
}


export const getCommentPage = commentID => {
    return axios.get(`${baseURL}/item/${commentID}.json`)
        .then((data) => {
            return data.data
        })
        .catch(err => {
            console.log("Error")
            return err
        })
}

export const getUserPage = user => {
    return axios.get(`${baseURL}/user/${user}.json`)
        .then((data) => {
            return data.data
        })
        .catch(err => {
            console.log("Error")
            return err
        })
}


