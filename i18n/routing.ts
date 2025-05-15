import { defineRouting } from "next-intl/routing";
import { defaultDefaultLocale, supportedLanguages } from "./locale";

export const routing = defineRouting({
  locales: supportedLanguages,
  defaultLocale: defaultDefaultLocale,
  localePrefix: 'as-needed'
});