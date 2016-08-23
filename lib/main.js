// Requiring that this dependency is available and loaded.
var $ = require('jquery');
var deleteItem = require('./deleteItem.js')
var item = require('./item.js')
var completed = require('./completed.js')

$(function() {

    var $body = $("[data-js='body']")
    var $formElement = $("[data-js='todo__form' ]");
    var $submitElement = $("[data-js='todo__submit']");
    var $textElement = $("[data-js='todo__text']");
    var $listElement = $("[data-js='todo__items']");
    var $toolBar = $("[data-js='todo__toolBar']");


      $submitElement.on("click", function(e){
      // prevents default submit behavior
      e.preventDefault();

      var $listString = $textElement.val();

      if($listString.length >= 2){
        $listElement.append(`
          <li class="todo__listItems">
            <span class="checkOff"
                  data-js="checkOff">
            </span>
            <p  data-js="todo__listText"
                class="todo__listText">
              ${$listString}
            </p>
          </li>
          `);
          // clears the place to enter a new todo.
          $textElement.val("");
        } else {
        alert("Please put more than 2 characters to create todo.");
      };
    });

    $listElement.on("click", "[data-js='todo__listText']", function(e){
        $(e.target).parent().toggleClass("selected");
      });

      $listElement.on("click", "[data-js='checkOff']", function(e){
     var $circleSelected = $(e.currentTarget);
     $circleSelected.parent().toggleClass("todoCompleted");
   });
});
