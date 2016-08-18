// Main javascript/jQuery
$(function() {
  var $submitElement = $("[data-js='todo__submit']");
  var $textElement = $("[data-js='todo__text']");
  var $listElement = $("[data-js='todo__items']");

  // prevents default on submit
  $submitElement.on("return", function(e){
      e.preventDefault();
    });


});
