function checkAdBlock() {
        //see if adblock is occuring
        setTimeout(function() {
               	if(!document.getElementsByClassName) return;

		var ads = $("#leftbar"),
               		ad = ads[ads.length - 1];
                
               	if(!ad || ad.innerHTML.length < 500 || ad.clientHeight === 0) {
               		$("#pleaseshowads").fadeIn();
               	}
        }, 4000);
}

function loadCurrentDevices() {
	$.getJSON( "https://s3.amazonaws.com/recoverybuilderwebsite/devices.json", function ( data ) {
		var devices = [];
		$.each( data, function( key, val ) {
		        var imageName = val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
			devices.push( '<tr><td style="text-align: left;"><a class="devicelink" href="http://download.cyanogenmod.org/?device=' + val + '">' + val + '</a></span><td><a class="devicelink" href="/latest/clockworkmodrecovery/' + val + '">cwmr</a></td><td><a class="devicelink" href="/latest/cyanogenrecovery/' + val + '/">cm recovery</a></td><td><a class="devicelink" href="/all/' + val + '/">see all</a></td></tr>' );
		});
		$("#currentdevices").html("");
		$( "<table/>", {
			"class": "my-new-list",
			html: devices.join( "" )
		}).appendTo( "#currentdevices" );
	});
}

function loadRequestedFiles() {
        var type = getUrlVars()[2];
        var list = getUrlVars()[1];
        var device = getUrlVars()[3];
        
        if( list == "all") {
                device = getUrlVars()[2];
                type = "";
        }
        
        $("#devicename").html(device);
        
        var fileList = [];
        
        $.getJSON( "https://s3.amazonaws.com/recoverybuilderwebsite/devicedetails.json", function ( data ) {
                $.each( data, function( key, val ) {
                        if( key == device) {
                                files = val[type];
                                console.log(files);
                                
                                if( list == "latest" ) {
                                        try {
                                                fileList.push( '<tr><td><a class="devicelink" href="' + files['latest'].link + '">' + files['latest'].link + '</a></td></tr>' );
                                        } catch(error) {
                                                fileList.push( '<tr><td>Requested recovery not found</td></tr>' );
                                        }
                                } else if( list == "all" ) {
                                        console.log("showing all files");
                                        console.log(val);
                                        $.each( val["clockworkmodrecovery"].files, function( allkey, allval ) {
                                                fileList.push( '<tr><td><a class="devicelink" href="' + allval.link + '">' + allval.link + '</a></td></tr>' );
                                        });
                                        $.each( val["cyanogenrecovery"].files, function( allkey, allval ) {
                                                fileList.push( '<tr><td><a class="devicelink" href="' + allval.link + '">' + allval.link + '</a></td></tr>' );
                                        });
                                }
                        }
                });
                
                $('#requestedFilesHolder').html('');
                $( '<table/>', {
                        'class': 'my-new-list',
                        html: fileList.join( '' )
                }).appendTo( '#requestedFilesHolder' );
        });
}

function getUrlVars() {
        var pathArray = window.location.pathname.split( '/' );
        return pathArray;
}
