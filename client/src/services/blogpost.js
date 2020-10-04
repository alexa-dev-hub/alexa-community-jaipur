export default {
  fetchPosts: () => {
    return fetch("https://alexadevhub.herokuapp.com/api/posts")
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
