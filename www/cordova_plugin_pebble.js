var Pebble = {

    setAppUUID: function(uuid, connectCallback, disconnectCallback) {

        cordova.exec(
            connectCallback,
            disconnectCallback,
            'Pebble',
            'setAppUUID',
            [ uuid ]
        );

    },

    getVersionInfo: function(success, failure) {

        cordova.exec(
            success,
            failure,
            'Pebble',
            'getVersionInfo',
            []
        );
    },

    countConnectedWatches: function(success, failure) {

        cordova.exec(
            success,
            failure,
            'Pebble',
            'countConnectedWatches',
            []
        );
    },

    launchApp: function(success, failure) {

        cordova.exec(
            success,
            failure,
            'Pebble',
            'launchApp',
            [ ]
        );

    },


    sendMessage: function(key, message, connectCallback, disconnectCallback) {

        cordova.exec(
            connectCallback,
            disconnectCallback,
            'Pebble',
            'sendMessage',
            [ key, message ]
        );

    },

    sendImage: function(key, base64Data, connectCallback, disconnectCallback) {

        cordova.exec(
            connectCallback,
            disconnectCallback,
            'Pebble',
            'sendImage',
            [ key, base64Data ]
        );

    }

};


module.exports = Pebble;
