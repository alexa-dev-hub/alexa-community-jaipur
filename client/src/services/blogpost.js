import links from '../pages/links/links';

const fetchHeaders={
    method: 'GET', 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
       },
    
   
}


export default {
  fetchPosts: () => {
    return fetch(`${links.corsValidator+links.api}/api/posts`,fetchHeaders)
      .then((res) => {
        if (res.status !== 401) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("HERE: ", data);
        return data;
      });
  },
};
