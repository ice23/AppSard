cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.LaunchNavigator/www/android/launchnavigator.js",
        "id": "uk.co.workingedge.phonegap.plugin.LaunchNavigator.LaunchNavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugin/www/phonenavigator.js",
        "id": "org.apache.cordova.plugin.PhoneNavigator",
        "clobbers": [
            "window.PhoneNavigator"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "uk.co.workingedge.phonegap.plugin.LaunchNavigator": "2.0.0",
    "org.apache.cordova.plugin": "0.1.0",
    "org.apache.cordova.splashscreen": "1.0.0",
    "org.apache.cordova.dialogs": "0.3.0",
    "org.apache.cordova.network-information": "0.2.15",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.apache.cordova.vibration": "0.3.13"
}
// BOTTOM OF METADATA
});