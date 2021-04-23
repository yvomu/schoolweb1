var topic = ["拉麵","滷肉飯","水餃"];
//透過"$"來判斷是不是jQuery的語法
$(document).ready(function(){
    $("button").click(function(){
        var go=1;
        if($(".meal").val()){
        // if($(".num").val() && $(".num").val()<=topic.length+1)
        topic.splice(topic.length,0,$(".meal").val());
        $("ul").append(`<li>${topic[topic.length-1]}</li>`);
        }
    });
   
})
$(function (){
    //找到input然後on(如果前面動作執行，坐後面的動作)
    $("#input1").on("click",function(){
        
        var numberOfListItem = topic.length;
        var randnum = Math.random()*numberOfListItem;
        var randomChildNumber = Math.floor(randnum);
        $("h1").text(topic[randomChildNumber]);
        $("img").remove();
        //$("ul").append('<img src=randomChildNumber+".jpg" alt=${topic[randomChildNumber]}>');
        if (randomChildNumber == 0){
            
            $("ul").append('<img src="0.jpg" alt="拉麵">');
        }else if(randomChildNumber == 1){
            
            $("ul").append('<img src="1.jpg" alt="滷肉飯">');
        }else if(randomChildNumber == 2){

            $("ul").append('<img src="2.jpg" alt="水餃">');
        }
        //alert(randnum);
    })
})