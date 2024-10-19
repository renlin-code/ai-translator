import { AUTO_LANG, SUPPORTED_LANGS } from "./consts";

export type Language = typeof SUPPORTED_LANGS[number]["locale"];
export type AutoLanguage = typeof AUTO_LANG;
export type FromLanguage = Language | AutoLanguage;

export interface State {
  langFrom: FromLanguage;
  langTo: Language;
  textFrom: string;
  result: string;
  isLoading: boolean;
};

export type Action = 
  | { type: "SWITCH_LANG" }
  | { type: "SET_LANG_FROM", payload: FromLanguage }
  | { type: "SET_LANG_TO", payload: Language }
  | { type: "SET_TEXT_FROM", payload: string }
  | { type: "SET_RESULT", payload: string }

export enum SectionType {
  From = "from",
  To = "to",
}