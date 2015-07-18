/**
 * Created by Administrator on 2015/7/18.
 */
$(document).ready(function(){
   $("input[type='text']").each(function(){
       var objthis = $(this);
       objthis.css("color","#888");
       var oldvalue = objthis.val();
       objthis.focus(function(){
           if($(this).val() == oldvalue){
               $(this).val("");
               $(this).css("color","black")
           }
       });
       objthis.blur(function(){
           if($(this).val() == ""){
               $(this).val(oldvalue);
               $(this).css("color","#888")
           }
       });
   });
});