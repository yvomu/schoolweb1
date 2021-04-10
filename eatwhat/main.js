//透過"$"來判斷是不是jQuery的語法
$(function(){
    //找到input然後on(如果前面動作執行，坐後面的動作)
    $("input").on("click",function(){
        
        var numberOfListItem = $("li").length;
        var randnum = Math.random()*numberOfListItem;
        var randomChildNumber = Math.floor(randnum);
        $("h1").text($("li").eq(randomChildNumber).text());
        
        if (randomChildNumber == 0){
            $("img").remove();
            $("ul").append('<img src="0.jpg" alt="拉麵">');
        }else if(randomChildNumber == 1){
            $("img").remove();
            $("ul").append('<img src="1.jpg" alt="滷肉飯">');
        }else{
            $("img").remove();
            $("ul").append('<img src="2.jpg" alt="水餃">');
        }
        //alert(randnum);
    })
})