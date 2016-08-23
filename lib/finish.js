var $ = require('jquery');

var finish = this;

finish.init = function(listElement) {
  console.log(listElement);

  listElement.on("click", "[data-js='todo__listText']", function(e){
      $(e.target).parent().toggleClass("selected");
      });
        listElement.on("click", "[data-js='checkOff']", function(e){
     var $circleSelected = $(e.currentTarget);
     $circleSelected.parent().toggleClass("todoCompleted");
   });

   var $counter = listElement.children().length;
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
           ${$} items
        </label>
      `);
    };
};
