document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("appointmentForm");

    if (form) {
        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Appointment Booked Successfully!");

            form.reset();

        });
    }

});