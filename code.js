$(document).ready(function()
    {
        $("form").submit(enterName);

        function enterName(event)
        {
            event.preventDefault();
            var rank = $("input[name=rank]:checked").val();
            var firstName = $("input#first-name").val();
            var lastName = $("input#last-name").val();
            var fullGreeting = rank + " " + firstName + " " + lastName;
            var color = $("input[name=rank]:checked").data("color");

            $("#greeting").text(fullGreeting)
            $("#output").show().css("color", color);
        }
    });