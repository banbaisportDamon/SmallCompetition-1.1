extern_script=document.createElement("script");
extern_script.setAttribute("type","text/javascript");
extern_script.setAttribute("src","ajax.js");
document.body.appendChild(extern_script);



function getSmallScheduleList(){
	alert("hahsh");/*
   	var aoData=[];
   	aoData.push( { "name":"id_check",					"value": id_check} );
   	aoData.push( { "name":"smallSchedule.create_user", 	"value": create_user } );
   	aoData.push( { "name":"smallSchedule.op_leader_id",	"value": op_leader_id } );
   	aoData.push( { "name":"smallSchedule.rule_type", 	"value": rule_type } );
   	aoData.push( { "name":"smallSchedule.status", 		"value": status } );
   	alert("send");
	doSendAjaxRequest("/actions/SmallSchedule.action?getSmallScheduleList",aoData,showSmallScheduleList);*/
}
function showSmallScheduleList(obj){
   	try{
   		_smallScheduleList = obj.aaData;
    		var ht='';
	    ht += '<div class="mui-scroll-wrapper"><div class="mui-scroll">';
	    var ruleType = ['PK对抗赛','单打排位赛','单打循环赛','双打排位赛','双打循环赛','交叉双打积分赛'];
	    for(var i = 0; i < _smallScheduleList.length; i++){
	    		ht +=	'<div class="tournament">';
	    		tournamentInfo.push( { "id":_smallScheduleList[i].id, "create_user":_smallScheduleList[i].create_user, "op_leader_id":_smallScheduleList[i].op_leader_id} );
	    		ht +=		'<div class="tournament-name tc mb10" height="40px"><a href="#" data-value="'+i+'">'+_smallScheduleList[i].title+'</a></div>';
	    		ht += 		'<hr></hr>';
	    		ht +=		'<div class="pl10 pr10">';
	    		ht +=			'<table width="100%" class="tl">';
			ht +=				'<tr>';
			ht +=					'<td class="competitionLogo" width="80px" rowspan=3><img src="img/VS_background_01.png" width="60px" height="60px"/></td>';
			var d = new Date(_smallScheduleList[i].create_time);     
			ht +=					'<td class="f0d8"><img src="img/clock.png" width="10px" height="10px">&nbsp;&nbsp;时间：'+formatDate(d)+'</td>';
			ht +=				'</tr>';
			ht +=				'<tr>';
			ht +=					'<td class="f0d8"><img src="img/schedule_01.png" width="10px" height="14px"/>&nbsp;&nbsp;赛制：'+ruleType[_smallScheduleList[i].rule_type]+'</td>';
			ht +=				'</tr>';
			ht +=				'<tr>';
			ht +=					'<td class="f0d8"><img src="img/location_02.png" width="10px" height="14px" />&nbsp;&nbsp;地点：'+_smallScheduleList[i].addr+'</td>';
			ht +=				'</tr>';
			ht +=			'</table>';
			ht +=		'</div>';
			ht +=	'</div>';
	    }
	    ht += '</div></div>';
	    $(".competitionList").html( ht );
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