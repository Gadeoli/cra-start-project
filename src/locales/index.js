import flagPtBr from './flags/bt-BR.png';
import flagEnUs from './flags/en-US.png';

export const allowed = () => {
    return ['en-US', 'pt-BR'];
}

export const appLocales = () => {
    return [
        {
            id: 1,
            title: 'en-US',
            flag: flagEnUs,
            intl: 'lang.english'
        },
        {
            id: 2,
            title: 'pt-BR',
            flag: flagPtBr,
            intl: 'lang.portuguese'
        }
    ];
}