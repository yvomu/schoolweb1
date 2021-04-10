var Month=[0,31,28,31,30,31,30,31,31,30,31,30,31];

$(document).ready(function(){
  $("button").click(function(){
    var go=1;
    if($(".mmonth").val()<=12 && $("#dday").val()<=Month[$(".mmonth").val()])
      setMonthAndDay($(".mmonth").val(),$("#dday").val());
    else
    {
       go=0;
       alert("請輸入正確日期");
    }
        
      if($(".cclass").val()){
        if($(".num").val() && $(".num").val()<=topic.length+1)
          topic.splice($(".num").val()-1,0,$(".cclass").val());
        else{
          go=0;
          alert("請輸入正確場次"); 
        }
      }

      if($(".delcclass").val()){
        if($(".delcclass").val()<=topic.length)
          topic.splice($(".delcclass").val()-1,1);
        else{
          go=0;
          alert("請輸入正確場次");
        }
          
      }
      if(go==1) 
        setTable();  
     
  });
});

function setTable(){
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    //一秒有1000毫秒
    //每分鐘60秒、每小時60min、每天24h
    var millisecsPerDay = 24*60*60*1000;
    var x=0;
    for(x;x<topicCount;x++){
        if (topic[x] == "尚未開學" || topic[x] == "國定假日") {

        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td style="color:gray;">${x+1}</td>`);
        $("#courseTable").append(`<td style="color:gray;">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td style="color:gray;">${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
        }
       else{
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
       }
    }
}


