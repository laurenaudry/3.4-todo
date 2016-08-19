// Main javascript/jQuery
$(function() {
  var $formElement = $("[data-js=todo__form]")
  var $submitElement = $("[data-js='todo__submit']");
  var $textElement = $("[data-js='todo__text']");
  var $listElement = $("[data-js='todo__items']");


    $submitElement.on("click", function(e){
    // prevents default submit behavior
    e.preventDefault();

    var $listString = $textElement.val();

    if($listString.length >= 2){
      $listElement.append(`
        <li class="todo__listItems">
          <p  data-js="todo__listText"
              class="todo__listText">
            ${$listString}
          </p>
        </li>
        `);

        $textElement.val("");
      };
  });
  $listElement.on("click", "[data-js='todo__listText']", function(e){
    $(e.target).parent().toggleClass("selected");
  });
});
