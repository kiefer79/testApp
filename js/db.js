function insertNews(tx, newuid, newdata) {
	//tx.executeSql('INSERT INTO news (uid, data) VALUES (1, "Test1")');
	//tx.executeSql('INSERT INTO news (uid, data) VALUES (2, "Test2")');
	//tx.executeSql('INSERT INTO news (uid, data) VALUES (3, "Test3")');
	//tx.executeSql('INSERT INTO news (uid, data) VALUES (4, "Test4")');
	tx.executeSql('INSERT INTO news (uid, data) VALUES (newuid, newdata)');
	
	
}

function dbError(err) {
	alert("Error processing SQL: " + err.code);
}

function dbSuccess() {
	alert('db success');
}

function createTables(tx) {
	console.log('createTables');
	tx.executeSql('CREATE TABLE IF NOT EXISTS news (uid unique, data)');
}

function queryNews(tx) {
	console.log('queryNews');
	tx.executeSql('SELECT * from news', [], newsQuerySuccess, dbError);
}

function newsQuerySuccess(tx, results) {
	console.log('newsQuerySuccess');
	// process only if valid results
	if(typeof results != 'undefined'){
		len = results.rows.length;
		console.log(len);
		console.log(results.rows.item(0).data.uid);

		for (var i=0; i<len; i++){
				console.log(results.rows.item(i).data);
				newitem = $('#newstemplate').clone();
				newitem.find('.date').text(row.datetime);
				newitem.find('.title').text(row.title);
				newitem.find('.teaser').text(row.bodytext);
				jQuery('#newslist').append(newitem.html());
				
		}
	}
}

function newsQueryError() {
	alert('news query error');
}

function getLastID(tx) {
	tx.executeSql('SELECT max(uid) from news', [], lastIDSuccess, dbError);
}

function lastIDSuccess(tx, results) {
	console.log('lastIDSuccess');
	console.log(results.rows.item(0).data);
}