import axios from "axios";


export const instance = axios.create({
baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 6000,
  headers: {
    "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
  }
});


export const groupBy = function groupByArray(xs, key, sortKey) {
  return xs.reduce(function(rv, x) {
    let v = key instanceof Function ? key(x) : x[key];
    let el = rv.find(r => r && r.key === v);

    if (el) {
      el.values.push(x);
      el.values.sort(function(a, b) {
        return a[sortKey].toLowerCase().localeCompare(b[sortKey].toLowerCase());
      });
    } else {
      rv.push({ key: v, values: [x] });
    }
    return rv;
  }, []);
};

export const getPosts = () => {
  return (dispatch, getState) => {
    dispatch({ type: "LOAD_START_FETCH" });
    instance
    .get(
      "/comments",
     {
     },
    )
    .then((response1) => {
      console.log(response1.data);
        dispatch({ type: "LOAD_POST_FETCH_SUCCESS",payload:response1.data });
    })
    .catch((error) => {
      dispatch({ type: "LOAD_POST_FETCH_FAILIURE" });
    })
  };
};



