var $ = require('jquery');

  var $listElement = $("[data-js='todo__items']");

  var $counter = $listElement.children().length;
   if($counter == 1){
     $("[data-js='footer']").html(`
       <label class="footer__counter"
          data-js="footer__counter">
          ${$counter} item
       </label>
     `);
   }else{
     $("[data-js='footer']").html(`
       <label class="footer__counter"
          data-js="footer__counter">
          ${$counter} items
       </label>
     `);
   };
