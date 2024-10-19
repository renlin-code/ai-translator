import { useReducer } from "react";
import { State, Action, FromLanguage, Language } from "../types";
import { AUTO_LANG } from "../consts";

const initialState: State = {
  langFrom: "auto",
  langTo: "EN",
  textFrom: "",
  result: "",
  isLoading: false,
};

function reducer(state: State, action: Action): State {
  const { type } = action;

  switch (type) {
  case "SWITCH_LANG":
    if (state.langFrom === AUTO_LANG) return state;

    return {
      ...state,
      langFrom: state.langTo,
      langTo: state.langFrom,
    };
  case "SET_LANG_FROM":
    return {
      ...state,
      langFrom: action.payload,
    };
  case "SET_LANG_TO":
    return {
      ...state,
      langTo: action.payload,
    };
  case "SET_TEXT_FROM":
    return {
      ...state,
      isLoading: !!action.payload.trim(),
      textFrom: action.payload,
      result: "",
    };
  case "SET_RESULT":
    return {
      ...state,
      isLoading: false,
      result: action.payload,
    };
  default:
    return state;
  }
}


export function useStore() {
  const [{
    langFrom,
    langTo,
    textFrom,
    result,
    isLoading,
  }, dispatch] = useReducer(reducer, initialState);

  const switchLang = () => dispatch({ type: "SWITCH_LANG" });
  const setLangFrom = (payload: FromLanguage) => dispatch({ type: "SET_LANG_FROM", payload });
  const setLangTo = (payload: Language) => dispatch({ type: "SET_LANG_TO", payload });
  const setTextFrom = (payload: string) => dispatch({ type: "SET_TEXT_FROM", payload });
  const setResult = (payload: string) => dispatch({ type: "SET_RESULT", payload });

  return {
    langFrom,
    langTo,
    textFrom,
    result,
    isLoading,
    switchLang,
    setLangFrom,
    setLangTo,
    setTextFrom,
    setResult,
  };
}