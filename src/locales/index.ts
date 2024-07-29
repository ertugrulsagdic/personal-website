import 'server-only'


const locales: { [key: string]: () => Promise<any> } = {
    en: () => import('./en').then((mod) => mod.default),
    tr: () => import('./tr').then((mod) => mod.default)
}

export const getLocale = async (locale: string, keys?: string) => {
    if (!keys) {
        return await locales[locale]();
    }

    const translations = await locales[locale]();
    return keys.split('.').reduce((acc, key) => acc[key], translations);
}

export default getLocale;

// import en from './en';
// import tr from './tr';
// import en from './en.json';
// import tr from './tr.json';

// const getLocale = function (locale?: string) {
//     return locale === 'tr' ? tr : en;
// };


// export default getLocale;
