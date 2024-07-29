import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import appsFlyer from "react-native-appsflyer";

const InitializeSDKHandler = (props) => {

    const {displayConversionData, useDeepLink} = props

    useEffect(() => {

        appsFlyer.initSdk(
            {
                devKey: 'fRW5xbFJeZithQZjC62zAe',
                isDebug: true,
                onInstallConversionDataListener: displayConversionData, //Optional
                onDeepLinkListener: useDeepLink, //Optional
                timeToWaitForATTUserAuthorization: 10 //for iOS 14.5
            },
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        );
    }, [])

    return (null);
};

export default InitializeSDKHandler;