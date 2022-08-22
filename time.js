




function timeCount(){
   setInterval(timeCount, 1000);

   test = timeCount;
   var date = new Date();
   var hour = date.getHours();
   var minute = date.getMinutes();
   var second = date.getSeconds();

   if(hour > 12){
      hour = hour -12;

   }
   if(hour<10){
      hour = "0" + hour;
   }
   if(minute < 10){
      minute = "0" + minute
   }
   if(second < 10){
      second = "0" +  second
   }

   var time = hour + ":" + minute + ":" + second

   document.getElementById("time").innerText = time;
}


function pstTime(){
   setInterval(pstTime, 1000);
   test = pstTime;
   var date = new Date();
   var hour = date.getHours();
   var minute = date.getMinutes();
   var second = date.getSeconds();

   hour = hour - 3
   if(hour > 12){
      hour = hour -12;

   }
   if(hour<10){
      hour = "0" + hour;
   }
   if(minute < 10){
      minute = "0" + minute
   }
   if(second < 10){
      second = "0" +  second
   }

   if(hour == 0){
      hour = 12
   }

   var time = hour + ":" + minute + ":" + second
   document.getElementById("time").innerText = time;
}



function cstTime(){
   test = cstTime;
   var date = new Date();
   var hour = date.getHours();
   var minute = date.getMinutes();
   var second = date.getSeconds();
   hour = hour - 1
   if(hour > 12){
      hour = hour -12;

   }
   if(hour<10){
      hour = "0" + hour;
   }
   if(minute < 10){
      minute = "0" + minute
   }
   if(second < 10){
      second = "0" +  second
   }

   if(hour == 0){
      hour = 12
   }
   var time = hour + ":" + minute + ":" + second
   document.getElementById("time").innerText = time;
}


timeCount();
