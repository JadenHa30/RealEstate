const { v4 } = require('uuid');

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return window.navigator.userAgent.match(toMatchItem);
    });
}

export function detectOS() {
    const { userAgent } = window.navigator;
    if (userAgent.includes('Mac')) {
        return 'Mac';
    } else if (userAgent.includes('Window')) {
        return 'Window';
    } else if (userAgent.includes('Linux')){
        return 'Linux';
    } else {
        return 'Unknown-Device';
    }
}

export const getDeviceId = () => {
    const id = v4();
    const isMobile = detectMob();
    
    let userAgent;
    let geoLocation = 'unknown';

    if (!isMobile) {
        userAgent = detectOS();
    } else {
        userAgent = '';
    }

    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;

            geoLocation = `${crd.latitude}/${crd.longitude}`;
        }, (err) => {
            console.log('error in getCurrentPosition', err)
        });
    }
    
    return `${userAgent}-${geoLocation}-${id}`;
}
