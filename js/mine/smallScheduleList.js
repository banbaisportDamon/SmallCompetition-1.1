
function getSmallScheduleList(id_check, create_user, op_leader_id, rule_type, status){
   	var aoData=[];
   	aoData.push( { "name":"id_check",					"value": id_check		} );
   	aoData.push( { "name":"smallSchedule.create_user", 	"value": create_user 	} );
   	aoData.push( { "name":"smallSchedule.op_leader_id",	"value": op_leader_id 	} );
   	aoData.push( { "name":"smallSchedule.rule_type", 	"value": rule_type 		} );
   	aoData.push( { "name":"smallSchedule.status", 		"value": status 			} );
	doSendAjaxRequest("/actions/SmallSchedule.action?getSmallScheduleList",aoData,showSmallScheduleList);
}

function doSendAjaxRequest(xurl,param,fnCallback){
    if ( xurl.indexOf('http://') == -1 ) xurl = _URL+xurl;
    $.ajax( {
        "url":  			xurl,
        "data": 			param,
        "timeout" : 		10000,
        "contentType" : "application/x-www-form-urlencoded; charset=utf-8",
        "success": 		function (json) {
            try{
                fnCallback( json );
                _smallScheduleList = json.aaData;
            }catch(e){}
        },
        "dataType": "json",
        "cache": false,
        "type": "POST",
        "error": function (xhr, error, thrown) {
        }
    } );
}

function showSmallScheduleList(obj){
   	try{
   		var smallScheduleList = obj.aaData;
    		var ht='';
	    ht += '<div class="mui-scroll-wrapper"><div class="mui-scroll">';
	    var ruleType = ['PK对抗赛','单打排位赛','单打循环赛','双打排位赛','双打循环赛','交叉双打积分赛'];
	    for(var i = 0; i < smallScheduleList.length; i++){
	    		ht +=	'<div class="tournament">';
	    		ht +=		'<div class="tournament-name tc mb10" height="40px"><a href="#" data-value="'+smallScheduleList[i].id+'">'+smallScheduleList[i].title+'</a></div>';
	    		ht += 		'<hr></hr>';
	    		ht +=		'<div class="pl10 pr10">';
	    		ht +=			'<table width="100%" class="tl">';
			ht +=				'<tr>';
			ht +=					'<td class="competitionLogo" width="80px" rowspan=3><img src="img/VS_background_01.png" width="60px" height="60px"/></td>';
			var d = new Date(smallScheduleList[i].create_time);     
			ht +=					'<td class="f0d8"><img src="img/clock.png" width="10px" height="10px">&nbsp;&nbsp;时间：'+formatDate(d)+'</td>';
			ht +=				'</tr>';
			ht +=				'<tr>';
			ht +=					'<td class="f0d8"><img src="img/schedule_01.png" width="10px" height="14px"/>&nbsp;&nbsp;赛制：'+ruleType[smallScheduleList[i].rule_type]+'</td>';
			ht +=				'</tr>';
			ht +=				'<tr>';
			ht +=					'<td class="f0d8"><img src="img/location_02.png" width="10px" height="14px" />&nbsp;&nbsp;地点：'+smallScheduleList[i].addr+'</td>';
			ht +=				'</tr>';
			ht +=			'</table>';
			ht +=		'</div>';
			ht +=	'</div>';
	    }
	    ht += '</div></div>';
	    $(".competitionList").html( ht );
	    mui('.mui-scroll-wrapper').scroll();
   	}catch(e){}
}

function   formatDate(now)   {     
	var   year=now.getFullYear();     
	var   month=now.getMonth()+1;     
	var   date=now.getDate();     
	var   hour=now.getHours();     
	var   minute=now.getMinutes();
	month = month >= 10 ? month : '0'+month;
	date = date >= 10 ? date : '0'+date;
	hour = hour >= 10 ? hour :'0'+hour;
	minute = minute >= 10 ? minute : '0'+minute;
	return   year+"-"+month+"-"+date+" "+hour+":"+minute;     
}     

