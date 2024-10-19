interface SuppLang {
  name: string;
  locale: string;
  voice?: string;
}

export const SUPPORTED_LANGS: SuppLang[] = [
  { name: "English", locale: "EN", voice: "en-US" },
  { name: "Spanish", locale: "ES", voice: "es-ES" },
  { name: "French", locale: "FR", voice: "fr-FR" },
  { name: "German", locale: "DE", voice: "de-DE" },
  { name: "Italian", locale: "IT", voice: "it-IT" },
  { name: "Portuguese", locale: "PT", voice: "pt-PT" },
  { name: "Russian", locale: "RU", voice: "ru-RU" },
  { name: "Chinese", locale: "ZH", voice: "zh-CN" },
  { name: "Japanese", locale: "JA", voice: "ja-JP" },
  { name: "Dutch", locale: "NL", voice: "nl-NL" },
  { name: "Polish", locale: "PL", voice: "pl-PL" },
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
  { name: "Estonian", locale: "ET" },
  { name: "Latvian", locale: "LV" },
  { name: "Lithuanian", locale: "LT" },
  { name: "Slovak", locale: "SK" },
];

export const AUTO_LANG = "auto";