$(document).ready(function() {
  const form = $('#orderForm');
  const submitBtn = $('#submitBtn');
  const btnText = submitBtn.find('.btn-text');
  const btnLoading = submitBtn.find('.btn-loading');

  // Real-time Validation
  form.find('input, select, textarea').on('input change', function() {
    validateField($(this));
  });

  function validateField(field) {
    const value = field.val().trim();
    let isValid = true;
    const errorMsg = field.next('.error-message');

    if (field.prop('required') && value === '') {
      isValid = false;
    } else if (field.attr('type') === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) isValid = false;
    } else if (field.attr('type') === 'tel') {
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(value)) isValid = false;
    }

    if (!isValid) {
      field.addClass('invalid');
      // errorMsg.show(); // CSS handles this via + selector
    } else {
      field.removeClass('invalid');
      // errorMsg.hide();
    }
    return isValid;
  }

  // Form Submission
  form.on('submit', function(e) {
    e.preventDefault();

    let isFormValid = true;
    form.find('input, select').each(function() {
      if (!validateField($(this))) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Start Loading
      submitBtn.prop('disabled', true);
      btnText.hide();
      btnLoading.css('display', 'inline-block');

      // Simulate API Call
      setTimeout(function() {
        // Success
        alert('Cảm ơn bạn! Yêu cầu của bạn đã được gửi thành công.');
        form[0].reset();
        form.find('.invalid').removeClass('invalid');
        
        // Reset Button
        submitBtn.prop('disabled', false);
        btnText.show();
        btnLoading.hide();
      }, 2000);
    } else {
      // Shake animation or focus first error
      const firstInvalid = form.find('.invalid').first();
      if (firstInvalid.length) {
        $('html, body').animate({
          scrollTop: firstInvalid.offset().top - 100
        }, 500);
        firstInvalid.focus();
      }
    }
  });
});
