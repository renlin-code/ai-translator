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
  { name: "Chinese", locale: "ZH" },
  { name: "Japanese", locale: "JA" },
  { name: "Dutch", locale: "NL" },
  { name: "Polish", locale: "PL" },
  { name: "Arabic", locale: "AR" },
  { name: "Swedish", locale: "SV" },
  { name: "Danish", locale: "DA" },
  { name: "Finnish", locale: "FI" },
  { name: "Czech", locale: "CS" },
  { name: "Greek", locale: "EL" },
  { name: "Hungarian", locale: "HU" },
  { name: "Romanian", locale: "RO" },
  { name: "Turkish", locale: "TR" },
  { name: "Slovenian", locale: "SL" },
  { name: "Bulgarian", locale: "BG" },
  { name: "Croatian", locale: "HR" },
  { name: "Estonian", locale: "ET" },
  { name: "Latvian", locale: "LV" },
  { name: "Lithuanian", locale: "LT" },
  { name: "Slovak", locale: "SK" },
  { name: "Serbian", locale: "SR" },
];

export const AUTO_LANG = "auto";