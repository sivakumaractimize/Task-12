$(document).ready(function() {
    $("#btn").click(formValidation); // Bind the click event to the button and pass formValidation as a reference

    // Event bindings for input fields
    $("#propertyName").on("input", validProperty);
    $("#name").on("input", validName);
    $("#email").on("input", validEmail);
    $("#mobile").on("input", validMobile);

    // Form validation function
    function formValidation() {
        if (!validProperty()) {
            $("#nameErr, #emailErr, #mobErr").text("");
            $("input").css({border: "1px solid gray"});
        } else if (!validName()) {
            $("#emailErr, #mobErr").text("");
            $("#email").css({border: "1px solid gray"});
        } else if (!validEmail()) {
            $("#mobErr").text("");
            $("#mobile").css({border: "1px solid gray"});
        } else if (!validMobile()) {
            // Mobile validation failed, handle errors if needed
        } else {
            // All validations passed, show modal and reset form
            let modal = new bootstrap.Modal($("#modal")[0]);
            modal.show();
            $("#form")[0].reset();
            stars.removeClass("gold");
            rating = 0;
            $("input").css("border-color", "lightgrey");
        }
    }

    // Property validation function
    function validProperty() {
        let propertyName = $("#propertyName").val();
        let letters = /^[A-Za-z\s]+$/;

        if (propertyName === "") {
            $("#PropErr").text("Property Name Can't Be Empty").css({color:"red"});
            $("#propertyName").css({border:"1px solid red"});
            return false;
        } else if (!propertyName.match(letters)) {
            $("#PropErr").text("Property Name should contain only alphabets").css({color: "red"});
            $("#propertyName").css({border: "1px solid red"});
            return false;
        } else {
            $("#updatePropertyName").text("Property Name :" + propertyName);
            $("#PropErr").text("");
            $("#propertyName").css({border: "1px solid green"});
            return true;
        }
    }

    // Name validation function
    function validName() {
        let name = $("#name").val();
        $("#updateName").text(" Customer Name  :" + name);

        if (name === "") {
            $("#nameErr").text("Name Can't be Empty").css({color:"red"});
            $("#name").css({border:"1px solid red"});
            return false;
        } else if (name.length < 3) {
            $("#nameErr").text("Name Should be at least 3 letters").css({color:"red"});
            $("#name").css({border:"1px solid red"});
            return false;
        } else if (name.charAt(0) >= 'A' && name.charAt(0) <= 'Z') {
            let containsNumber = false;
            for (let i = 0; i < name.length; i++) {
                if (!isNaN(parseInt(name[i]))) {
                    containsNumber = true;
                    break;
                }
            }
            if (!containsNumber) {
                $("#nameErr").text("");
                $("#name").css({border:"1px solid green"});
                return true;
            } else {
                $("#nameErr").text("Name Should not contain numbers").css({color:"red"});
                $("#name").css({border:"1px solid red"});
                return false;
            }
        } else {
            $("#nameErr").text("Name first letter should be capital and name should not contain numbers").css({color:"red"});
            $("#name").css({border:"1px solid red"});
            return false;
        }
    }

    // Email validation function
    function validEmail() {
        let email = $("#email").val();
        let atIndex = email.indexOf("@");

        if (email.trim() === "") {
            $("#emailErr").text("Please Enter Email").css({color:"red"});
            $("#email").css({border:"1px solid red"});
            return false;
        } else if (atIndex === -1 || email.indexOf(".") === -1) {
            $("#emailErr").text("Please Enter valid Email").css({color:"red"});
            $("#email").css({border:"1px solid red"});
            return false;
        } else {
            let domain = email.substring(atIndex + 1);
            if (/^\d/.test(domain)) {
                $("#emailErr").text("Numbers are not allowed immediately after '@'").css({color:"red"});
                $("#email").css({border:"1px solid red"});
                return false;
            } else {
                $("#emailErr").text("");
                $("#email").css({border:"1px solid green"});
                return true;
            }
        }
    }

    // Mobile validation function
    function validMobile() {
        let mobile = $("#mobile").val();

        if (mobile === "") {
            $("#mobileErr").text("Please Enter Mobile").css({color:"red"});
            $("#mobile").css({border:"1px solid red"});
            return false;
        } else if (mobile.length === 10 && (mobile.startsWith('9') || mobile.startsWith('8') || mobile.startsWith('7') || mobile.startsWith('6'))) {
            $("#mobileErr").text("");
            $("#mobile").css({border:"1px solid green"});
            return true;
        } else {
            $("#mobileErr").text("Number should start with 9, 8, 7, or 6 and should be 10 digits long").css({color:"red"});
            $("#mobile").css({border:"1px solid red"});
            return false;
        }
    }

    // Star rating functionality
    const stars = $("#starRating i");

    stars.on("click", function() {
        stars.removeClass("gold");
        $(this).prevAll().addBack().addClass("gold");
        updateRating();
    });

    stars.on("dblclick", function() {
        $(this).removeClass("gold");
        updateRating();
    });

    function updateRating() {
        var rating = $(".gold").length;
        $("#ratingValue").text("Rating: " + rating + " Out of 5 stars");
    }

    // Autocomplete functionality
    $(function() {
        var availableTags = [
            "Apartment",
            "Apartment with Lake View",
            "Villa",
            "Luxury Villa",
            "Duplex Villa",
            "Apartment with Furniture"
        ];
        $("#propertyName").autocomplete({
            source: availableTags
        });
    });
});

