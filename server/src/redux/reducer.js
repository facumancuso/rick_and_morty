const initialState = {
  myFavorites: [],
  allCharacters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      };
    case "REMOVE_FAV":
      const updatedFavorites = state.myFavorites.filter(
        (character) => character.id !== action.payload
      );
      return {
        ...state,
        myFavorites: updatedFavorites,
        allCharacters: updatedFavorites
      };
    case "FILTER":
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters
      };
    case "ORDER":
      const orderedCharacters = [...state.myFavorites].sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: orderedCharacters
      };
    default:
      return state;
  }
};

export default reducer;
