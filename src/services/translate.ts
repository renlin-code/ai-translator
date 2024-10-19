import axios from "axios";

const DEEPL_API_URL = "https://api-free.deepl.com/v2/translate";
const DEEPL_API_KEY = import.meta.env.VITE_API_KEY;

interface TranslationResponse {
  translations: Array<{
    detected_source_language: string;
    text: string;
  }>;
}

export async function translateText(
  text: string,
  targetLang: string
): Promise<[string, string]> {
  try {
    const response = await axios.post<TranslationResponse>(
      DEEPL_API_URL,
      null,
      {
        params: {
          auth_key: DEEPL_API_KEY,
          text: text,
          target_lang: targetLang,
        },
      }
    );

    const translation = response.data.translations[0].text;
    const sourceLang = response.data.translations[0].detected_source_language;

    return [translation, sourceLang];
  } catch (error) {
    console.error("Error translating:", error);
    throw error;
  }
}