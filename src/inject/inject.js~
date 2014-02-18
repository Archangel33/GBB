chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		
		

		function calcAvgPerRd(){
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
		    
		    return avg;
		}

		function AvgPrice(){
		    return "$<span class='price avg'>" + calcAvgPerRd() + "</span>/rd";
		}	
                
                function createBarItem(barItemClasses, barItemFunc){
		     barI = $("<div class='barItem " + barItemClasses + "'></div>")	
		     barI.html(barItemFunc());
		     return barI;
		}
		
                gbb = {
			init:function(){		
		            bar = $("<div class='gbb'></div>");
		            bar.append(createBarItem("",AvgPrice));
	                    $("body").append(bar);
		        }

		    }

                gbb.init();
		// ----------------------------------------------------------

	}
	}, 10);
});
