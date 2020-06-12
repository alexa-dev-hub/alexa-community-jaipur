export default {
  fetchPosts: () => {
    return fetch("/api/posts")
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
