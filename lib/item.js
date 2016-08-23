var $ = require('jquery');

var item = this;
item.submitElement = $("[data-js='todo__submit']");
item.listElement = $("[data-js='todo__items']");
item.textElement = $("[data-js='todo__text']");

item.init =function(e) {

  item.submitElement.on("click", function(e){
  // prevents default submit behavior
  e.preventDefault();
  var $listString = item.textElement.val();

  if($listString.length >= 2){
    item.listElement.append(`
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
      item.textElement.val("");
    } else {
    alert("Please put more than 2 characters to create todo.");
  };
  });
};
