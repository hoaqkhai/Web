$(document).ready(function() {
  // --- Banner Slider ---
  const bannerSlider = $('#banner-slider');
  const bannerSlides = bannerSlider.find('.slide');
  const bannerPrevBtn = $('#banner-prevBtn');
  const bannerNextBtn = $('#banner-nextBtn');
  let bannerIndex = 0;
  const bannerCount = bannerSlides.length;

  function showBannerSlide(index) {
    if (index < 0) bannerIndex = bannerCount - 1;
    else if (index >= bannerCount) bannerIndex = 0;
    else bannerIndex = index;

    const offset = -bannerIndex * 100;
    bannerSlider.css('transform', `translateX(${offset}%)`);
  }

  bannerPrevBtn.click(() => showBannerSlide(bannerIndex - 1));
  bannerNextBtn.click(() => showBannerSlide(bannerIndex + 1));

  // Auto slide banner
  let bannerInterval = setInterval(() => showBannerSlide(bannerIndex + 1), 5000);

  // Pause on hover
  bannerSlider.hover(
    () => clearInterval(bannerInterval),
    () => bannerInterval = setInterval(() => showBannerSlide(bannerIndex + 1), 5000)
  );

  // --- Product Slider ---
  const productTrack = $('.product-track');
  const productCards = $('.product-card');
  const prevProductBtn = $('.prev-product');
  const nextProductBtn = $('.next-product');
  
  let productIndex = 0;
  const totalProducts = productCards.length;
  
  function getVisibleItems() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function updateProductSlider() {
    const visibleItems = getVisibleItems();
    const maxIndex = totalProducts - visibleItems;
    
    // Boundary checks
    if (productIndex < 0) productIndex = 0;
    if (productIndex > maxIndex) productIndex = maxIndex;

    const itemWidth = productCards.first().outerWidth();
    // Assuming 30px gap from CSS
    const gap = 30; 
    const moveAmount = (itemWidth + gap) * productIndex;
    
    productTrack.css('transform', `translateX(-${moveAmount}px)`);
    
    // Update button states
    prevProductBtn.css('opacity', productIndex === 0 ? '0.5' : '1');
    nextProductBtn.css('opacity', productIndex >= maxIndex ? '0.5' : '1');
  }

  prevProductBtn.click(() => {
    productIndex--;
    updateProductSlider();
  });

  nextProductBtn.click(() => {
    productIndex++;
    updateProductSlider();
  });

  // Handle Resize
  $(window).resize(() => {
    updateProductSlider();
  });

  // --- Scroll Animations ---
  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    $('.product-card, .feature-item, .testimonial-card, .section-heading').each(function() {
      const top = $(this)[0].getBoundingClientRect().top;
      if (top < triggerBottom) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  }

  // Initial styles for animation elements
  $('.product-card, .feature-item, .testimonial-card, .section-heading').css({
    'opacity': '0',
    'transform': 'translateY(30px)',
    'transition': 'all 0.6s ease-out'
  });

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on load
});
