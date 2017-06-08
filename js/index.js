$(_=>{
   var screenVal = $("input:text");
   $('input:button').on('click',function(){
       //"use strict";
       var eachNumber = $(this).val();
       var currentScreen = screenVal.val();
       currentScreen += eachNumber;
       screenVal.val(currentScreen);
       if($(this).val() == "C"){
           screenVal.val("");
       }
   })

   $("button").click((event)=>{
      // "use strict";
       event.preventDefault();
       screenVal.val(eval(screenVal.val()));
   });
});