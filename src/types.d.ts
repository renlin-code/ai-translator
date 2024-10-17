import { AUTO_LANG, SUPPORTED_LANGS } from "./consts";

export type Language = keyof typeof SUPPORTED_LANGS;
export type AutoLanguage = typeof AUTO_LANG;
export type FromLanguage = Language | AutoLanguage;

export interface State {
  langFrom: string;
  langTo: string;
  textFrom: string;
  result: string;
  isLoading: boolean;
};

export type Action = 
  | { type: "INTERCHANGE_LANG" }
  | { type: "SET_LANG_FROM", payload: FromLanguage }
  | { type: "SET_LANG_TO", payload: Language }
  | { type: "SET_TEXT_FROM", payload: string }
  | { type: "SET_RESULT", payload: string }