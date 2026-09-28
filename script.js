let selectedTimeValue = "";

function changeImage(element) {
    const featuredImg = document.getElementById("featured-img");
    featuredImg.src = element.src;

    const allThumbs = document.querySelectorAll(".thumb");
    allThumbs.forEach(thumb => thumb.classList.remove("active-thumb"));

    element.classList.add("active-thumb");
}


function selectTime(button) {
    const timeButtons = document.querySelectorAll(".time-btn");
    timeButtons.forEach(btn => btn.classList.remove("selected-time"));

    button.classList.add("selected-time");
    selectedTimeValue = button.innerText;
}


function selectWorkshop(title) {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
    }
}


function handleBookingSubmit(event) {
    event.preventDefault();
    const navn = document.getElementById("booking-navn").value;

    if (!selectedTimeValue) {
        alert("Vennligst velg et tidspunkt før du booker!");
        return;
    }

    alert(`Takk for din bestilling, ${navn}! Vi har reservert plass kl. ${selectedTimeValue}.`);
    event.target.reset();
    selectedTimeValue = "";
    document.querySelectorAll(".time-btn").forEach(btn => btn.classList.remove("selected-time"));
}


function handleReviewSubmit(event) {
    event.preventDefault();
    alert("Takk for at du delte din opplevelse med oss!");
    event.target.reset();
}