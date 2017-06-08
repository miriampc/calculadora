$(_=>{
   let screenVal = $('input:text');
   $('input:button').on('click',_=>{
       "use strict";
       let eachNumber = $(this).val();
       let currentScreen = screenVal.val();
       currentScreen += eachNumber;
       screenVal.val(currentScreen);
       if($(this).val() == "C"){
           screenVal.val("");
       }
   })

   $("button").click((event)=>{
       "use strict";
       event.preventDefault();
       screenVal.val(eval(screenVal.val()));
   })
});