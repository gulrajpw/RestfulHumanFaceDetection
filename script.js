  $("#btnSubmit").click(function() {

	var searchTerm = $("#searchTerm").val();
	console.log(searchTerm);

    var detectionRequest = {
	"async": true,
	"crossDomain": true,
	"url": "https://apicloud-facerect.p.rapidapi.com/process-url.json?url=" + searchTerm,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apicloud-facerect.p.rapidapi.com",
		"x-rapidapi-key": "b07586a20amsh250c63ec1da93b5p16cd86jsnc0b7b1bb8162"
	}
}

$.ajax(detectionRequest).done(function (response) {
	console.log(response);
	//	var prependedText = '<img id="theImg"' + " " + 'src=' + '"' + searchTerm + '"' + ' />';

	//Display the response information in a div.
	var prependedText = '<img id="theImg" style="height:250px; width: 250px; top:130% !important;" class="wrap"  ' + " " + 'src=' + '"' + searchTerm + '"' + ' />';
	$("#pictureSent").prepend(prependedText);
	
});

  });

