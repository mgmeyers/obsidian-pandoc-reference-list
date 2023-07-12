import Fuse from 'fuse.js';

export const langListRaw = [
  {
    value: 'af-ZA',
    label: 'Afrikaans',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-af-ZA.xml',
  },
  {
    value: 'ar',
    label: 'العربية',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-ar.xml',
  },
  {
    value: 'bg-BG',
    label: 'Български',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-bg-BG.xml',
  },
  {
    value: 'ca-AD',
    label: 'Català',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-ca-AD.xml',
  },
  {
    value: 'cs-CZ',
    label: 'Čeština',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-cs-CZ.xml',
  },
  {
    value: 'cy-GB',
    label: 'Cymraeg',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-cy-GB.xml',
  },
  {
    value: 'da-DK',
    label: 'Dansk',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-da-DK.xml',
  },
  {
    value: 'de-AT',
    label: 'Deutsch (Österreich)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-de-AT.xml',
  },
  {
    value: 'de-CH',
    label: 'Deutsch (Schweiz)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-de-CH.xml',
  },
  {
    value: 'de-DE',
    label: 'Deutsch (Deutschland)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-de-DE.xml',
  },
  {
    value: 'el-GR',
    label: 'Ελληνικά',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-el-GR.xml',
  },
  {
    value: 'en-GB',
    label: 'English (UK)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-en-GB.xml',
  },
  {
    value: 'en-US',
    label: 'English (US)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-en-US.xml',
  },
  {
    value: 'es-CL',
    label: 'Español (Chile)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-es-CL.xml',
  },
  {
    value: 'es-ES',
    label: 'Español (España)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-es-ES.xml',
  },
  {
    value: 'es-MX',
    label: 'Español (México)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-es-MX.xml',
  },
  {
    value: 'et-EE',
    label: 'Eesti keel',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-et-EE.xml',
  },
  {
    value: 'eu',
    label: 'Euskara',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-eu.xml',
  },
  {
    value: 'fa-IR',
    label: 'فارسی',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-fa-IR.xml',
  },
  {
    value: 'fi-FI',
    label: 'Suomi',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-fi-FI.xml',
  },
  {
    value: 'fr-CA',
    label: 'Français (Canada)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-fr-CA.xml',
  },
  {
    value: 'fr-FR',
    label: 'Français (France)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-fr-FR.xml',
  },
  {
    value: 'he-IL',
    label: 'עברית',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-he-IL.xml',
  },
  {
    value: 'hi-IN',
    label: 'हिंदी',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-hi-IN.xml',
  },
  {
    value: 'hr-HR',
    label: 'Hrvatski',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-hr-HR.xml',
  },
  {
    value: 'hu-HU',
    label: 'Magyar',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-hu-HU.xml',
  },
  {
    value: 'id-ID',
    label: 'Bahasa Indonesia',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-id-ID.xml',
  },
  {
    value: 'is-IS',
    label: 'Íslenska',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-is-IS.xml',
  },
  {
    value: 'it-IT',
    label: 'Italiano',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-it-IT.xml',
  },
  {
    value: 'ja-JP',
    label: '日本語',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-ja-JP.xml',
  },
  {
    value: 'km-KH',
    label: 'ភាសាខ្មែរ',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-km-KH.xml',
  },
  {
    value: 'ko-KR',
    label: '한국어',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-ko-KR.xml',
  },
  {
    value: 'la',
    label: 'Latina',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-la.xml',
  },
  {
    value: 'lt-LT',
    label: 'Lietuvių kalba',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-lt-LT.xml',
  },
  {
    value: 'lv-LV',
    label: 'Latviešu',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-lv-LV.xml',
  },
  {
    value: 'mn-MN',
    label: 'Монгол',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-mn-MN.xml',
  },
  {
    value: 'nb-NO',
    label: 'Norsk bokmål',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-nb-NO.xml',
  },
  {
    value: 'nl-NL',
    label: 'Nederlands',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-nl-NL.xml',
  },
  {
    value: 'nn-NO',
    label: 'Norsk nynorsk',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-nn-NO.xml',
  },
  {
    value: 'pl-PL',
    label: 'Polski',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-pl-PL.xml',
  },
  {
    value: 'pt-BR',
    label: 'Português (Brasil)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-pt-BR.xml',
  },
  {
    value: 'pt-PT',
    label: 'Português (Portugal)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-pt-PT.xml',
  },
  {
    value: 'ro-RO',
    label: 'Română',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-ro-RO.xml',
  },
  {
    value: 'ru-RU',
    label: 'Русский',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-ru-RU.xml',
  },
  {
    value: 'sk-SK',
    label: 'Slovenčina',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-sk-SK.xml',
  },
  {
    value: 'sl-SI',
    label: 'Slovenščina',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-sl-SI.xml',
  },
  {
    value: 'sr-RS',
    label: 'Српски / Srpski',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-sr-RS.xml',
  },
  {
    value: 'sv-SE',
    label: 'Svenska',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-sv-SE.xml',
  },
  {
    value: 'th-TH',
    label: 'ไทย',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-th-TH.xml',
  },
  {
    value: 'tr-TR',
    label: 'Türkçe',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-tr-TR.xml',
  },
  {
    value: 'uk-UA',
    label: 'Українська',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-uk-UA.xml',
  },
  {
    value: 'vi-VN',
    label: 'Tiếng Việt',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-vi-VN.xml',
  },
  {
    value: 'zh-CN',
    label: '中文 (中国大陆)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-zh-CN.xml',
  },
  {
    value: 'zh-TW',
    label: '中文 (台灣)',
    url: 'https://raw.githubusercontent.com/citation-style-language/locales/master/locales-zh-TW.xml',
  },
];

export const langList = new Fuse(langListRaw, {
  threshold: 0.35,
  keys: ['label'],
  minMatchCharLength: 2,
});
