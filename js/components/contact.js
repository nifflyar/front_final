


document.getElementById('contactForm').addEventListener('submit', function (event) {

    event.preventDefault();
    
    $("#contactForm").fadeOut(400, function () {
        $("#successMessage").removeClass("d-none").hide().fadeIn(500);
    });
    $("#contactForm")[0].reset();
});