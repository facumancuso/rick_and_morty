import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../redux/actions"
const initialState = {
  myFavorites: [],
  allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
  return {
    ...state,
    myFavorites: [...state.myFavorites, action.payload], // Add to myFavorites only
    allCharacters: [...state.allCharacters, action.payload], // Add to allCharacters as well if necessary
  };

  case FILTER:
    if (action.payload === "Default") {
      return { ...state, myFavorites: state.allCharacters };
    } else if (action.payload === "All") {
      return { ...state, myFavorites: state.allCharacters };
    } else {
      const byGender = state.allCharacters.filter((character) => character.gender === action.payload);
      return { ...state, myFavorites: byGender };
    }
  

      
    case ORDER:
      let orderedChars = []
      if (!action.payload) {
        return { ...state, myFavorites: state.allCharacters }
      } else if (action.payload === "A") {
        orderedChars = state.allCharacters.sort((a, b) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        })
      } else if (action.payload === "D") {
        orderedChars = state.allCharacters.sort((b, a) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        })
      }
      return { ...state, myFavorites: orderedChars }
    case REMOVE_FAV:
      if (action.payload !== "all") {
        return {
          ...state,
          myFavorites: state.myFavorites.filter((char) => char.id !== parseInt(action.payload)),
          allCharacters: state.myFavorites.filter((char) => char.id !== parseInt(action.payload)),
        }
      } else if (action.payload === "all") {
        return initialState
      }
      break
    default:
      return { ...state }
  }
}

export default rootReducer