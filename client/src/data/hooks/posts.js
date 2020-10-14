import Axios from 'axios'
import { useState, useEffect } from 'react'
import _ from 'lodash'
import links from '../defaults/links/links';

const API = `${links.api}/api/posts`;

const useFetchPosts = () => {
    const [posts, setPosts] = useState([])
    const getPosts = async () => {

        let res = await Axios({
            method: 'GET',
            url: API
        })
 
        let {content} = res.data
        console.log(content);
        let FilteredData = _.filter(content, o=>o.length)
        console.log(FilteredData)
        setPosts(FilteredData)
        
    }

    useEffect(() => {
        getPosts()
    }, [])


    return posts;
}
export default  useFetchPosts 
