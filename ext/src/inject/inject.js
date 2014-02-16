chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		
		var gbb = $("<div class='gbb'></div>");
		var biAvgPerRd = $("<div class='barItem price avg'></div>")
		
		var temp = $("tr.hilite > td:contains('/rd')");
		
		console.log(temp)
		var sum = 0;
		temp.each(function(){
			console.log(this)
			var price = $(this).text()
								.replace("/rd","")
								.replace("$","");
			console.log(price);
			sum+= parseFloat(price);
			console.log("sum:" + sum);
		});
		
		var avg = sum/temp.length;
		avg= Math.round(avg*100)/100;
		
		biAvgPerRd.html("$<span class='price avg'>"+avg+"</span>/rd")
		
		gbb.append(biAvgPerRd);
		$("body").append(gbb);
		// ----------------------------------------------------------

	}
	}, 10);
});