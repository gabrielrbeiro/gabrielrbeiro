export type SupportedLanguage = 'en' | 'pt-br';
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en', 'pt-br'];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export type GlobalSettings = {
  title: string;
  description: string;
};

export const DefaultSettings: Record<SupportedLanguage, GlobalSettings> = {
  'en': {
    title: 'gr/blog',
    description: 'Just a developer sharing thoughts on programming, tech trends, and career insights. No fluff, just real opinions and useful content.',
  },
  'pt-br': {
    title: 'gr/blog',
    description: 'Apenas um desenvolvedor compartilhando pensamentos sobre programação, tendências tecnológicas e insights de carreira. Sem enrolação, apenas opiniões reais e conteúdo útil.',
  },
};
