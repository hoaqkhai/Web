document.addEventListener('DOMContentLoaded', function() {
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;
      // Clear previous errors
      document.querySelectorAll(".form-input").forEach((input) => {
        input.classList.remove("invalid");
      });
      // --- Validation Logic ---
      const fullName = document.getElementById("fullName");
      if (fullName.value.trim() === "") {
        fullName.classList.add("invalid");
        isValid = false;
      }
      const phone = document.getElementById("phone");
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone.value.trim())) {
        phone.classList.add("invalid");
        isValid = false;
      }
      const email = document.getElementById("email");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add("invalid");
        isValid = false;
      }
      const address = document.getElementById("address");
      if (address.value.trim() === "") {
        address.classList.add("invalid");
        isValid = false;
      }
      const product = document.getElementById("product");
      if (product.value === "") {
        product.classList.add("invalid");
        isValid = false;
      }
      // --- Form Submission ---
      if (isValid) {
        alert(
          "Yêu cầu của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất có thể."
        );
        // Here you would typically send the data to a server
        // e.g., using fetch() API
        this.reset();
      } else {
        alert(
          "Vui lòng kiểm tra lại thông tin và điền đầy đủ các trường bắt buộc."
        );
      }
    });
  }
});
