$(document).ready(function () {
      $(":radio").change(update)
    $("form").submit(flash);
      $("")
    function flash(event) {
        event.preventDefault()

    }
    
    function update() {
        var selectedBoxes = $("input[name=rank]:checked");
        var selections = selectedBoxes.val();
        $("#greetings").text(selections);
        var selectedColor = $("input[name=greeting1]:checked").data("color");
        $("#greetings").css("background-color",selectedColor);
    }



});