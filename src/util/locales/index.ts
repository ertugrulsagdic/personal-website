import en from './en';
import tr from './tr';
// import en from './en.json';
// import tr from './tr.json';

const getLocale = function (locale?: string) {
    return locale === 'tr' ? tr : en;
};


export default getLocale;

