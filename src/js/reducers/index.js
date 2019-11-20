import { CHANGE_LANG, TOGGLE_THEME } from "../constants/action-types";

export const initialState = {
  language: "FR", 
  theme: {
    palette: {
      type: 'light'
    }
  }
};

function rootReducer(state = initialState, action) {
  switch(action.type){
    case CHANGE_LANG: 
      return Object.assign({}, state, {
        language: action.payload
      });

    case TOGGLE_THEME:
      return Object.assign({}, state, {
        theme: {
          palette: {
            type: state.theme.palette.type === 'dark' ? 'light' : 'dark'
          }
        }
      });
    default:
      return state;
  }
}
export default rootReducer;