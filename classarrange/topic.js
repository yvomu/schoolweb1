var topic = ["尚未開學","國定假日","環境準備","隨機性","重複性","判斷條件"];
var startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //依次設定好月分與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

