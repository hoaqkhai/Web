$(document).ready(function () {
  // --- BANNER SLIDER LOGIC ---
  let bannerCurrentIndex = 0;
  const bannerSlides = $("#banner-slider .slide");
  const bannerTotalSlides = bannerSlides.length;
  let autoSlideInterval;

  function updateBannerPosition() {
    $("#banner-slider").css(
      "transform",
      `translateX(-${bannerCurrentIndex * 100}%)`
    );
  }

  function showNextBannerSlide() {
    bannerCurrentIndex = (bannerCurrentIndex + 1) % bannerTotalSlides;
    updateBannerPosition();
  }

  function showPrevBannerSlide() {
    bannerCurrentIndex =
      (bannerCurrentIndex - 1 + bannerTotalSlides) % bannerTotalSlides;
    updateBannerPosition();
  }

  function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    autoSlideInterval = setInterval(showNextBannerSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  $("#banner-nextBtn").click(function () {
    stopAutoSlide();
    showNextBannerSlide();
    startAutoSlide();
  });

  $("#banner-prevBtn").click(function () {
    stopAutoSlide();
    showPrevBannerSlide();
    startAutoSlide();
  });

  startAutoSlide();

  // --- SCROLL ANIMATION LOGIC ---
  // Apply initial opacity and transform
  $(".product-card, .blog-card").css({
    opacity: "0",
    transform: "translateY(20px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
  });

  $(window).scroll(function () {
    $(".product-card, .blog-card").each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 4;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).css({
          opacity: "1",
          transform: "translateY(0)"
        });
      }
    });
  }).scroll();
});
