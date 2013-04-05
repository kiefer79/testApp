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
	//alert('Device uid:' + device.uuid);
	//alert('Cordova: '+ device.cordova);
        $('#app-status-ul').append('<li>onDeviceReady</li>');
        try {
            pushNotification = window.plugins.pushNotification;
            if (device.platform == 'android' || device.platform == 'Android') {
                $("#app-status-ul").append('<li>registering android</li>');
                pushNotification.register(successHandler, errorHandler, {"senderID":"350275952046","ecb":"onNotificationGCM"});
            }
        } catch(err) {
            txt="There was an error on this page.\n\n";
            txt+="Error description: " + err.message + "\n\n";
            alert(txt); 
        }
    },
			
    online: function() {
	//alert(navigator.connection.type);
        $('#app-status-ul').append('<li>online</li>');
    }
    	
    //initDB: function() {
	//var db = window.openDatabase("rootality.de", "1.0", "rootality.de", 1000000);
	//db.transaction(createTables, dbError);
    //}
};

function onNotificationGCM(e) {
    $("#push-ol").append('<li>EVENT -> RECEIVED:' + e.event + '</li>');
    switch(e.event) {
        case 'registered':
            if(e.regid.length > 0) {
		var applicationid = '9F3B1-CA468';
		var googleRegid = e.regid;
		var deviceuuid = device.uuid;
		var params = JSON.stringify({ request: { application: applicationid, push_token: googleRegid, hwid: deviceuuid, device_type: 3 } });
                // Your GCM push server needs to know the regID before it can push to this device
                // here is where you might want to send it the regID for later use.
		//alert('registration id = ' + googleRegid);
		//alert('deviceuuid = ' + deviceuuid);
		alert('now trying to register at pushwoosh');
		//var request = new Array();
		//request['request'] = new Array();
		//request['request']['application'] = "5E2F3-EA68F";
		//request['request']['push_token'] = e.regid;
		//request['request']['hwid'] = device.uuid;
		//request['request']['device_type'] = 3;
		
                jQuery.ajax({
		    type: "POST",
                    url: "https://cp.pushwoosh.com/json/1.3/registerDevice",
                    dataType: "json",
                    data: params,
		    contentType: "application/json; charset=utf-8",
		    success: function(data, textStatus, jqXHR) {
			alert(data[status_code] + ' - ' + textStatus);
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
			alert(textStatus + ' - ' + errorThrown);
		    }
		    
                });
                      
                //$("#push-ol").append('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
                //$("#push-ol").append('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
            }
        break;
        
        case 'message' :
            $("#push-ol").append('<li>Message -> RECEIVED:' + e.message + '</li>');
	    $("#push-ol").append('<li>Message -> RECEIVED:' + e.msgcnt + '</li>');
            //alert('message: ' + e.payload.message);
        break;
        
        case 'error':
            alert('GCM error = ' + e.msg);
        break;
        
        default:
            alert('An unknown GCM event has occured');
        break;
    }
}

function successHandler (result) {
    $("#app-status-ul").append('<li>success:'+ result +'</li>');
}
            
function errorHandler (error) {
    $("#app-status-ul").append('<li>error:'+ error +'</li>');
}