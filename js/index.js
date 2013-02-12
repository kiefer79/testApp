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
        document.addEventListener("online", this.online, false);
		document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
		// test cordova api funcs
		// alert('Device: '+ device.name);
		// alert('Cordova: '+ device.cordova);
		
		
		
		// get news from live server
		app.requestNews();
		
		
		document.addEventListener('push-notification', function(event) {
			var notification = JSON.parse(event.notification);
            navigator.notification.alert(notification.aps.alert);
			pushNotification.setApplicationIconBadgeNumber(0);
		});
    },
			
	online: function() {
		alert(navigator.connection.type);
	},
	
	initDB: function() {
		var db = window.openDatabase("rootality.de", "1.0", "rootality.de", 1000000);
		db.transaction(createTables, dbError);
	},
			
	// process ajax call for news items
	requestNews: function(db) {
		console.log('requestNews');
		jQuery.ajax({
			url: "http://rootality.de/?eID=newsapp",
			dataType: 'jsonp',
			jsonp: 'jsoncallback',
			success: function (data) {
				jQuery.each(data, function(i, row) {
					 jQuery('#newslist').append('<div data-role="collapsible"><h3>'+row.title+'</h3><p>'+row.bodytext+'</p></div>');

					/*
					db.transaction(function(tx) {
						tx.executeSql('INSERT INTO news(uid,data) VALUES (?,?)',[row.uid,row], function(tx) {
							alert('success db insert');
						});
					});
					*/

				});
				$('#newslist').collapsibleset('refresh');
			},
			error: function() {
				alert('eid error');
			}
		});
	}

	
};