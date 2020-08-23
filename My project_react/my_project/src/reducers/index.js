import  { combineReducers} from "redux";
//  import counterReducer from "./counterReducer";
//  import dateReducer from "./dateReducers";
 import favoriteBeersReducer from "./favoritesBeersReducers";
  
 const rootReducer = combineReducers({favoriteBeersReducer})

 export default rootReducer;

