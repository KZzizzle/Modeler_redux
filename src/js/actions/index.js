import { CHANGE_LANG, TOGGLE_THEME } from "../constants/action-types";

export function changeLang(payload) {
    return { type: CHANGE_LANG, payload }
  };

export function toggleTheme(payload) {
  return { type: TOGGLE_THEME, payload}
}