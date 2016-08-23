var $ = require('jquery');

var item = this;
var $submitElement = $("[data-js='todo__submit']");
var $listElement = $("[data-js='todo__items']");
var $textElement = $("[data-js='todo__text']");
console.log("wut");
item.init =function(e) {

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
};
