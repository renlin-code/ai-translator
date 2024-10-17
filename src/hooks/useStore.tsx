import { useReducer } from "react";
import { State, Action, FromLanguage, Language } from "../types";

const initialState: State = {
  langFrom: "auto",
  langTo: "en",
  textFrom: "",
  result: "",
  isLoading: false,
};

function reducer(state: State, action: Action): State {
  const { type } = action;

  switch (type) {
  case "INTERCHANGE_LANG":
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
      isLoading: true,
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

  const interchangeLang = () => dispatch({ type: "INTERCHANGE_LANG" });
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
    interchangeLang,
    setLangFrom,
    setLangTo,
    setTextFrom,
    setResult,
  };
}