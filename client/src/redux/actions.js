import axios from "axios"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER "


//! SIN EXPRESS
// export const addFav = (char) => {
  //   return { type: ADD_FAV, payload: char }
  // }
  // export const removeFav = (id) => {
    //   return { type: REMOVE_FAV, payload: id }
    // }
//! CON EXPRESS
//     export const addFav = (character) => {
//     const endpoint = "http://localhost:3001/rickandmorty/fav";
//       return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//             type: "ADD_FAV",
//             payload: data,
//           });
//         });
//       };
//     };
// export const removeFav = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: "REMOVE_FAV",
//         payload: data,
//       });
//     });
//   };
// };



//! ASYNC AWAIT

// Version Async Await
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    console.log(error);
  }
};


export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};




export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
