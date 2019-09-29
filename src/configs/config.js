import Cookies from 'universal-cookie';
import { allowed as supportedLocales } from 'locales/index';


export const cookies = new Cookies();
export const TOKEN_KEY = "@cra-CONFIG";

export const getConfig = ( ) => {
    return cookies.get(TOKEN_KEY);
};

export const getLocale = () => {
    const config = getConfig();

    if(!config || typeof(config.locale) === 'undefined')
        return 'pt-BR';

    return config.locale;
}

export const setLocale = (locale) => {
    let config = getConfig();
    const allowed = supportedLocales();
    
    var found = allowed.find(function(element) {
        return element === locale;
    });

      
    if(!found){
        return false;
    }
      
    if(!config)
        config = {locale}
    else{
        config['locale'] = locale;
        window.location.reload();
    }

    cookies.set(TOKEN_KEY, JSON.stringify(config), {
        path: '/',
    });
}