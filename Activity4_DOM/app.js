// Activity 4
function showToast(message = "Match selected. Redirecting to booking form...") {
    let toast = document.getElementById("toast");
    
    if (!toast) {
        toast = document.createElement("p");
        toast.id = "toast";
        document.body.appendChild(toast);
    }


    toast.textContent = message;
    toast.classList.add("show");


    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    // Activity 5: Dynamically display information about IPL matches
    const demoElement = document.getElementById("demo");
    if (demoElement) {
        demoElement.textContent = "The Indian Premier League (IPL) 2026 brings world-class T20 cricket action across premier stadiums. Fans can book seats to watch their favorite franchises compete live!";
    }

    // Select all Book buttons in the table
    const bookButtons = document.querySelectorAll(".bookBtn");
    const bookingForm = document.getElementById("bookingForm");
    const matchSelect = document.getElementById("match");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();


            if (bookingForm) {
                bookingForm.scrollIntoView({ behavior: "smooth" });
            }


            const matchValue = button.getAttribute("data-match");
            if (matchSelect && matchValue) {
                matchSelect.value = matchValue;
            }


            showToast("Redirecting to booking form for selected match.");
        });
    });
});