import React from 'react';

export default class AlertsToasts {
    static _reactAlertRef = React.createRef();

    static getRef(){
        return this._reactAlertRef;
    }

    static show(type, message){
        let reactAlert = AlertsToasts.getRef().current;
        let showFn = reactAlert[type];

        showFn(message);
    }

    static showInfo(message){
        this.show('info', message);
    }

    static showSuccess(message){
        this.show('success', message);
    }

    static showError(message){
        this.show('error', message);
    }
}

/** 
 * positions: 
  'top left',
  'top right',
  'top center',
  'bottom left',
  'bottom right',
  'bottom center'
 * 
*/