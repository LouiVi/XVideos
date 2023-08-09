function CheckLink(l)
{
	if(l.replace("https://www.xvideos.com/video", "").length != l.length){
		return true;
		}else{
		return false;
		}
}

function GetLinks()
{
	var links = document.getElementsByTagName("a");
var arr = new Array();
for(c=0;c<links.length;c++){
	if(links[c].href != "#" && links[c].href != null) {
		if(!arr.includes(links[c].href) && CheckLink(links[c].href)==true) arr.push(links[c].href);
	}
}
app.WriteFile( "VideosLinksLast.txt", "\r" + arr.join("\r"), "Append" );
app.WriteFile( "VideosLinksLast1.txt", "," + arr.join(","), "Append" );
}

//var vidx = document.getElementsByTagName("video")[0];
var URL = window.URL || window.webkitURL;
//alert(URL);
var video = document.getElementsByTagName('video')[0];
//var urlBlob = URL.createObjectURL({{"name" : video.src}, {"type" : "video\/mp4"}});
//alert(urlBlob);
        //video.src = urlBlob;
        //video.load();
        //video.onloadeddata = function() {
        //    video.play();
        //}
//app.SetClipboardText( video.src );
app.WriteFile( "VideosNew2.txt", "\r" + video.src, "Append" );
GetLinks();
document.body.innerHTML = '<center><video autoplay controls download allowfullscreen="true" width="355" src="' + video.src + '"></video></center>';
//video.download();
/*
    function onChange() {
        var fileItem = document.getElementById('fileItem');
        var files = fileItem.files;
        var file = files[0];
        var urlBlob = URL.createObjectURL(file);
        video.src = urlBlob;
        video.load();
        video.onloadeddata = function() {
            video.play();
        }
    }
    */
//app.SetClipboardText( vidx.src );
/*
var links = document.getElementsByTagName("a");
var arr = new Array();
for(c=0;c<links.length;c++){
	if(links[c].href != "#" && links[c].href != null) {
		arr.push(links[c].href);
	}
}
app.SetClipboardText( arr.join("\r\n") );
*/
//app.SetClipboardText( vidx.src );

//alert(vidx.src);
//document.location = vidx.src;
//app.OpenUrl( vidx.src );