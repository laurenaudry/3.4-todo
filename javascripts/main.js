// Main javascript/jQuery
$(function() {
  var $formElement = $("[data-js=todo__form]")
  var $submitElement = $("[data-js='todo__submit']");
  var $textElement = $("[data-js='todo__text']");
  var $listElement = $("[data-js='todo__items']");
  var selectedTodo = [];


    $submitElement.on("click", function(e){
    // prevents default submit behavior
    e.preventDefault();

    var $listString = $textElement.val();

    if($listString.length >= 2){
      $listElement.append(`
        <li class="toDo__listItem">
          <span class="checkBox"></span>
          <p  data-js="toDo__listText"
              class="toDo__listText">
            ${$listString}
          </p>
        </li>
        `);

        $textElement.val("");
      };
  });
});
