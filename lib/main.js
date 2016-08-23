// Requiring that this dependency is available and loaded.
var $ = require('jquery');
var item = require('./item.js')
var finish = require('./finish.js')

$(function() {

    var $body = $("[data-js='body']")
    var $formElement = $("[data-js='todo__form' ]");

    var $toolBar = $("[data-js='todo__toolBar']");

    item.init()
    finish.init(item.listElement)


//     $listElement.on("click", "[data-js='todo__listText']", function(e){
//         $(e.target).parent().toggleClass("selected");
//       });
//
//       $listElement.on("click", "[data-js='checkOff']", function(e){
//      var $circleSelected = $(e.currentTarget);
//      $circleSelected.parent().toggleClass("todoCompleted");
//    });
//
//    var $counter = $listElement.children().length;
//     if($counter == 1){
//       $("[data-js='footer']").html(`
//         <label class="footer__counter"
//            data-js="footer__counter">
//            ${$counter} item
//         </label>
//       `);
//     }else{
//       $("[data-js='footer']").html(`
//         <label class="footer__counter"
//            data-js="footer__counter">
//            ${$} items
//         </label>
//       `);
//     };
});
