var pushNotification;

var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('online', this.online, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
	// test cordova api funcs
	//alert('Device: '+ device.name);
	//alert('Cordova: '+ device.cordova);
        jQuery('#app-status-ul').append('<li>onDeviceReady</li>');
        
        try {
            pushNotification = window.plugins.pushNotification;
            if (device.platform == 'android' || device.platform == 'Android') {
                $("#app-status-ul").append('<li>registering android</li>');
                pushNotification.register(successHandler, errorHandler, {"senderID":"555094746868","ecb":"onNotificationGCM"});
            }
        } catch(err) {
            txt="There was an error on this page.\n\n";
            txt+="Error description: " + err.message + "\n\n";
            alert(txt); 
        }
    },
			
    online: function() {
	//alert(navigator.connection.type);
        jQuery('#app-status-ul').append('<li>online</li>');
    }
    	
    //initDB: function() {
	//var db = window.openDatabase("rootality.de", "1.0", "rootality.de", 1000000);
	//db.transaction(createTables, dbError);
    //}
};

function onNotificationGCM(e) {
    $("#push-ol").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');
}

function successHandler (result) {
    $("#app-status-ul").append('<li>success:'+ result +'</li>');
}
            
function errorHandler (error) {
    $("#app-status-ul").append('<li>error:'+ error +'</li>');
}