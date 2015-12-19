var G_URL = "http://192.168.199.206:8081/"

function doSendAjaxRequest(xurl,param,fnCallback){
    if ( xurl.indexOf('http://') == -1 ) xurl = G_URL+xurl;
    $.ajax( {
        "url":  xurl,
        "data": param,
        "timeout" : 10000,
        "contentType" : "application/x-www-form-urlencoded; charset=utf-8",
        "success": function (json) {
            try{
            		alert("success");
                fnCallback( json );
            }catch(e){}
        },
        "dataType": "json",
        "cache": false,
        "type": "POST",
        "error": function (xhr, error, thrown) {
        		alert("fail");
        }
    } );
}

function getUrlParam(xurl,name){
    var para="";
    if(xurl.lastIndexOf("?")>0){
        para=xurl.substring(xurl.lastIndexOf("?")+1,xurl.length);
        var arr=para.split("&");
        para="";
        for(var i=0;i<arr.length;i++){
           if(arr[i].split("=")[0]==name) return arr[i].split("=")[1];
        }
        return "";
   }else{
        return "";
   }
}