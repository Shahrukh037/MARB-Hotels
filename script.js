let selectedHotel = "";

// OPEN BOOKING MODAL
function openBooking(hotel) {
  selectedHotel = hotel;
  document.getElementById("bookingModal").style.display = "block";
  document.getElementById("hotelName").value = hotel;
}

// CLOSE BOOKING MODAL
function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

// WHATSAPP BOOKING SUBMIT
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  let whatsappNumber = "+919891947517"; 
  // ☝️ yahan apna ya bhai ka WhatsApp number daalo (country code ke saath)

  let message =
    `*MARB Hotels Booking Request*%0A%0A` +
    `🏨 Hotel: ${selectedHotel}%0A` +
    `👤 Name: ${name}%0A` +
    `📞 Phone: ${phone}%0A` +
    `📅 Check-in: ${checkin}%0A` +
    `📅 Check-out: ${checkout}`;

  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");

  // optional: modal close after click
  closeBooking();
});