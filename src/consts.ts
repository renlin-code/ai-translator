interface SuppLang {
  name: string;
  locale: string;
}

export const SUPPORTED_LANGS: SuppLang[] = [
  { name: "English", locale: "EN" },
  { name: "Spanish", locale: "ES" },
  { name: "French", locale: "FR" },
  { name: "German", locale: "DE" },
  { name: "Italian", locale: "IT" },
  { name: "Portuguese", locale: "PT" },
  { name: "Russian", locale: "RU" },
  { name: "Georgian", locale: "KA" },
  { name: "Chinese", locale: "ZH" },
];

export const AUTO_LANG = "auto";