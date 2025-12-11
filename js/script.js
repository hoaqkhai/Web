// Static Data (No server needed)
const staticData = {
  banners: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
      alt: "Guitar Banner"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop",
      alt: "Piano Banner"
    }
  ],
  products: [
    {
      id: 1,
      name: "Fender FA-125CE",
      price: "6,500,000₫",
      image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Yamaha YSV104",
      price: "12,000,000₫",
      image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Roland FP-30X",
      price: "18,500,000₫",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Pearl Export Series",
      price: "22,000,000₫",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Yamaha YAS-280",
      price: "28,000,000₫",
      image: "https://images.unsplash.com/photo-1573871666457-7c7329118cf9?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  blogs: [
    {
      id: 1,
      title: "Hướng dẫn chọn đàn guitar cho người mới bắt đầu",
      category: "Guitar",
      date: "15/07/2023",
      image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1974&auto=format&fit=crop",
      desc: "Phân biệt giữa guitar classic và acoustic, và tìm ra cây đàn phù hợp nhất với phong cách của bạn."
    },
    {
      id: 2,
      title: "Lợi ích tuyệt vời của việc học Piano từ sớm",
      category: "Piano",
      date: "12/07/2023",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2070&auto=format&fit=crop",
      desc: "Khám phá cách học piano giúp phát triển tư duy, sự tập trung và khả năng sáng tạo của trẻ em."
    },
    {
      id: 3,
      title: "Top 5 bộ trống điện tử tốt nhất năm 2024",
      category: "Trống",
      date: "10/07/2023",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop",
      desc: "Đánh giá chi tiết các bộ trống điện tử phù hợp cho việc luyện tập tại nhà và biểu diễn nhỏ."
    },
    {
      id: 4,
      title: "Bí quyết bảo quản đàn Violin luôn như mới",
      category: "Violin",
      date: "08/07/2023",
      image: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=2070&auto=format&fit=crop",
      desc: "Những mẹo nhỏ nhưng quan trọng để giữ cho cây đàn violin của bạn luôn bền đẹp và âm thanh chuẩn."
    },
    {
      id: 5,
      title: "Ukulele vs Guitar: Bạn nên bắt đầu với nhạc cụ nào?",
      category: "Ukulele",
      date: "05/07/2023",
      image: "https://images.unsplash.com/photo-1575619176378-5e7e0e470817?q=80&w=1932&auto=format&fit=crop",
      desc: "So sánh chi tiết về độ khó, chi phí và phong cách âm nhạc để bạn dễ dàng lựa chọn."
    },
    {
      id: 6,
      title: "Nhập môn Saxophone: Những điệu Jazz kinh điển",
      category: "Saxophone",
      date: "02/07/2023",
      image: "https://images.unsplash.com/photo-1573871666457-7c7329118cf9?q=80&w=2070&auto=format&fit=crop",
      desc: "Tìm hiểu về lịch sử của Saxophone và những bản nhạc Jazz huyền thoại dành cho người mới."
    },
    {
      id: 7,
      title: "Cello: Âm thanh trầm ấm của dàn nhạc giao hưởng",
      category: "Cello",
      date: "28/06/2023",
      image: "https://images.unsplash.com/photo-1541689221361-ad95003448dc?q=80&w=2070&auto=format&fit=crop",
      desc: "Khám phá vẻ đẹp và kỹ thuật chơi Cello, nhạc cụ không thể thiếu trong các dàn nhạc thính phòng."
    },
    {
      id: 8,
      title: "Sáo Trúc: Hơi thở của âm nhạc truyền thống",
      category: "Sáo",
      date: "25/06/2023",
      image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
      desc: "Hướng dẫn cơ bản cách thổi sáo trúc và cảm nhận nét đẹp văn hóa qua từng giai điệu."
    },
    {
      id: 9,
      title: "Kỹ thuật chỉnh dây Drum Snare chuyên nghiệp",
      category: "Trống",
      date: "20/06/2023",
      image: "https://images.unsplash.com/photo-1571327073757-71d13c24de30?q=80&w=2070&auto=format&fit=crop",
      desc: "Bí quyết căng mặt trống snare để đạt được âm thanh đanh, gọn và uy lực chuẩn phòng thu."
    }
  ]
};

$(document).ready(function() {
  
  // --- Render Functions (Using Static Data) ---

  function fetchAndRenderBanners() {
    const banners = staticData.banners;
    const slider = $('#banner-slider');
    slider.empty();
    
    if (banners.length === 0) return;

    banners.forEach(banner => {
      slider.append(`
        <div class="slide">
          <img src="${banner.image}" alt="${banner.alt}">
        </div>
      `);
    });

    initBannerSlider();
  }

  function fetchAndRenderProducts() {
    const products = staticData.products;
    const track = $('.product-track');
    track.empty();

    if (products.length === 0) return;

    products.forEach(product => {
      track.append(`
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" class="product-img">
          <div class="product-details">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price}</p>
          </div>
        </div>
      `);
    });

    initProductSlider();
    initScrollAnimations();
  }

  function fetchAndRenderBlogs() {
    const blogTrack = $('#blog-track');
    const blogGrid = $('#blog-grid');
    
    // Check if we are on the blog page
    if (blogTrack.length === 0) {
      console.log('Blog track not found - not on blog page');
      return;
    }

    const blogs = staticData.blogs;
    console.log('Rendering blogs:', blogs.length, 'posts');
    
    // 1. Render Slider (Featured - first 5)
    blogTrack.empty();
    const sliderBlogs = blogs.slice(0, 5); 
    
    if (sliderBlogs.length === 0) {
       blogTrack.html('<p class="text-center w-full">Không có bài viết nào.</p>');
    } else {
        sliderBlogs.forEach((blog) => {
          blogTrack.append(createBlogCard(blog));
        });
        initBlogSlider();
    }

    // 2. Render Grid (Display all blog posts)
    blogGrid.empty();
    console.log('Blog grid element found:', blogGrid.length > 0);
    
    blogs.forEach((blog, index) => {
         const card = createBlogCard(blog);
         console.log('Adding blog card', index + 1, ':', blog.title);
         blogGrid.append(card);
    });
    
    console.log('Total cards in grid:', blogGrid.find('.blog-card').length);
  }

  // Helper to create card HTML reuse
  function createBlogCard(blog) {
      return `
            <div class="blog-card" data-category="${blog.category.toLowerCase()}">
              <div class="blog-image">
                 <img src="${blog.image}" alt="${blog.category}">
              </div>
              <div class="blog-content">
                <div class="blog-meta">
                  <span class="blog-category">${blog.category}</span>
                  <span class="blog-date">
                    <span class="material-icons-outlined" style="font-size: 16px;">schedule</span>
                    ${blog.date}
                  </span>
                </div>
                <h3 class="blog-title"><a href="#">${blog.title}</a></h3>
                <p class="blog-desc">${blog.desc}</p>
                <a href="#" class="read-more">Đọc thêm <span class="material-icons-outlined" style="font-size: 16px;">arrow_forward</span></a>
              </div>
            </div>
      `;
  }

  // Blog Search Functionality
  function initBlogSearch() {
    const searchInput = $('#blog-search');
    const searchBtn = $('.search-btn');
    
    function performSearch() {
      const searchTerm = searchInput.val().toLowerCase().trim();
      const blogCards = $('.blog-grid .blog-card');
      
      blogCards.each(function() {
        const title = $(this).find('.blog-title').text().toLowerCase();
        const desc = $(this).find('.blog-desc').text().toLowerCase();
        const category = $(this).find('.blog-category').text().toLowerCase();
        
        if (title.includes(searchTerm) || desc.includes(searchTerm) || category.includes(searchTerm)) {
          $(this).fadeIn(300);
        } else {
          $(this).fadeOut(300);
        }
      });
    }
    
    searchInput.on('keyup', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
    
    searchBtn.on('click', performSearch);
  }

  // Category Filter Functionality
  function initCategoryFilter() {
    const categoryPills = $('.category-pill');
    const blogCards = $('.blog-grid .blog-card');
    
    categoryPills.on('click', function() {
      const selectedCategory = $(this).data('category');
      
      // Update active state
      categoryPills.removeClass('active');
      $(this).addClass('active');
      
      // Filter cards
      if (selectedCategory === 'all') {
        blogCards.fadeIn(400);
      } else {
        blogCards.each(function() {
          const cardCategory = $(this).data('category');
          if (cardCategory === selectedCategory) {
            $(this).fadeIn(400);
          } else {
            $(this).fadeOut(400);
          }
        });
      }
    });
  }

  // Scroll to Top Button
  function initScrollToTop() {
    const scrollBtn = $('#scroll-to-top');
    
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 300) {
        scrollBtn.addClass('visible');
      } else {
        scrollBtn.removeClass('visible');
      }
    });
    
    scrollBtn.on('click', function() {
      $('html, body').animate({ scrollTop: 0 }, 600);
    });
  }

  // --- Initialization Functions ---

  function initBannerSlider() {
    const bannerSlider = $('#banner-slider');
    const bannerSlides = bannerSlider.find('.slide');
    const bannerPrevBtn = $('#banner-prevBtn');
    const bannerNextBtn = $('#banner-nextBtn');
    let bannerIndex = 0;
    const bannerCount = bannerSlides.length;

    if (bannerCount === 0) return;

    function showBannerSlide(index) {
      if (index < 0) bannerIndex = bannerCount - 1;
      else if (index >= bannerCount) bannerIndex = 0;
      else bannerIndex = index;

      const offset = -bannerIndex * 100;
      bannerSlider.css('transform', `translateX(${offset}%)`);
    }

    // Unbind old events if any to prevent duplicates
    bannerPrevBtn.off('click').click(() => showBannerSlide(bannerIndex - 1));
    bannerNextBtn.off('click').click(() => showBannerSlide(bannerIndex + 1));

    // Auto slide banner
    let bannerInterval = setInterval(() => showBannerSlide(bannerIndex + 1), 5000);

    // Pause on hover
    bannerSlider.hover(
      () => clearInterval(bannerInterval),
      () => bannerInterval = setInterval(() => showBannerSlide(bannerIndex + 1), 5000)
    );
  }

  function initProductSlider() {
    const productTrack = $('.product-track');
    const productCards = $('.product-card');
    const prevProductBtn = $('.prev-product');
    const nextProductBtn = $('.next-product');
    
    let productIndex = 0;
    const totalProducts = productCards.length;
    
    if (totalProducts === 0) return;

    function getVisibleItems() {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 992) return 2;
      return 3;
    }

    function updateProductSlider() {
      const visibleItems = getVisibleItems();
      const maxIndex = Math.max(0, totalProducts - visibleItems);
      
      // Boundary checks
      if (productIndex < 0) productIndex = 0;
      if (productIndex > maxIndex) productIndex = maxIndex;

      const itemWidth = productCards.first().outerWidth();
      // Assuming 30px gap from CSS (if applicable, otherwise check CSS)
      // If gap is dynamic or undefined in CSS, this might need adjustment.
      // For now assume standard 30px or 0 if flex gap isn't used for calculating
      // But typically outerWidth(true) includes margin if present.
      // Let's rely on outerWidth including margin if set via css.
      // If gap is via flex property on parent, we need to add it manually.
      // Let's assume a fixed gap for now as per previous logic.
      const gap = 30; 
      const moveAmount = (itemWidth + gap) * productIndex;
      
      productTrack.css('transform', `translateX(-${moveAmount}px)`);
      
      // Update button states
      prevProductBtn.css('opacity', productIndex === 0 ? '0.5' : '1');
      nextProductBtn.css('opacity', productIndex >= maxIndex ? '0.5' : '1');
    }

    prevProductBtn.off('click').click(() => {
      productIndex--;
      updateProductSlider();
    });

    nextProductBtn.off('click').click(() => {
      productIndex++;
      updateProductSlider();
    });

    // Handle Resize
    $(window).off('resize.productSlider').on('resize.productSlider', () => {
      updateProductSlider();
    });
    
    // Initial call
    updateProductSlider();
  }

  function initScrollAnimations() {
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8;
      
      $('.product-card, .feature-item, .testimonial-card, .section-heading, .blog-card').each(function() {
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
    $('.product-card, .feature-item, .testimonial-card, .section-heading, .blog-card').css({
      'opacity': '0',
      'transform': 'translateY(30px)',
      'transition': 'all 0.6s ease-out'
    });

    window.removeEventListener('scroll', checkScroll);
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
  }

  function initBlogFunctionality() {
    const blogCards = $('.blog-card');
    const categoryLinks = $('.category-link');
    const searchInput = $('#blog-search');
    const searchBtn = $('#search-btn');

    // Category Filtering
    categoryLinks.off('click').click(function(e) {
      e.preventDefault();
      
      // Active class
      categoryLinks.removeClass('active');
      $(this).addClass('active');

      const filter = $(this).data('filter');

      blogCards.each(function() {
        const cardCategory = $(this).data('category');
        // Simple case insensitive check or direct match
        // Note: data-category in HTML must match filter.
        // Assuming your static HTML had data-category matching filters.
        
        // Since we are fetching from API, we used the exact category string from API.
        // We might need to normalize if the filter buttons use 'all', 'guitars' vs 'Guitar'.
        // Let's assume basic robust check or matching strings.
        
        let shouldShow = (filter === 'all');
        if (!shouldShow) {
             // Basic normalization for demo
             const normCard = cardCategory.toLowerCase();
             const normFilter = filter.toLowerCase();
             if (normCard.includes(normFilter) || normFilter.includes(normCard)) {
                 shouldShow = true;
             }
        }

        if (shouldShow) {
          $(this).fadeIn();
          $(this).addClass('visible');
        } else {
          $(this).fadeOut();
          $(this).removeClass('visible');
        }
      });
    });

    // Search Functionality
    function performSearch() {
      const searchTerm = searchInput.val().toLowerCase();

      blogCards.each(function() {
        const title = $(this).find('.blog-title').text().toLowerCase();
        
        if (title.includes(searchTerm)) {
          $(this).fadeIn();
          $(this).addClass('visible');
        } else {
          $(this).fadeOut();
          $(this).removeClass('visible');
        }
      });
    }

    searchBtn.off('click').click(performSearch);
    searchInput.off('keyup').on('keyup', function(e) {
      if (e.key === 'Enter') performSearch();
      else performSearch(); // Real-time search
    });
  }

  function initBlogSlider() {
    const track = $('#blog-track');
    const cards = track.find('.blog-card');
    const prevBtn = $('#blog-prev');
    const nextBtn = $('#blog-next');
    const dotsContainer = $('#blog-dots');
    
    // Safety check - if no cards yet (rendered async), we wait or return? 
    // This function is called AFTER rendering in fetchAndRenderBlogs, so it's safe.
    if (cards.length === 0) return;

    let currentIndex = 0;
    let autoPlayInterval;

    function getVisibleItems() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }

    function renderDots() {
       dotsContainer.empty();
       const visibleItems = getVisibleItems();
       // Limit max validation
       const maxIndex = Math.max(0, cards.length - visibleItems); 
       
       // Create dots for every possible starting position (simple carousel logic)
       // Or simpler: one dot per page? 
       // User asked for "slideshow", usually implies standard carousel behavior.
       // Let's do 1 dot per item to be safe and standard, but handle active state correctly.
       
       // Actually, common carousel UI: number of dots = (total items - visible items) + 1
       const count = maxIndex + 1;

       for(let i = 0; i < count; i++) {
           dotsContainer.append(`<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`);
       }
    }
    
    function updateSlider() {
      const visibleItems = getVisibleItems();
      const maxIndex = Math.max(0, cards.length - visibleItems);

      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      const cardWidth = cards.first().outerWidth();
      const gap = 30; // From CSS
      const moveAmount = (cardWidth + gap) * currentIndex;

      track.css('transform', `translateX(-${moveAmount}px)`);

      const dots = dotsContainer.find('.dot');
      dots.removeClass('active');
      dots.eq(currentIndex).addClass('active');
    }

    function nextSlide() {
      const visibleItems = getVisibleItems();
      const maxIndex = Math.max(0, cards.length - visibleItems);
      
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    }

    function prevSlide() {
        const visibleItems = getVisibleItems();
        const maxIndex = Math.max(0, cards.length - visibleItems);

      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = maxIndex;
      }
      updateSlider();
    }
    
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    // Init
    renderDots();
    updateSlider();
    startAutoPlay();

    // Events
    nextBtn.off('click').click(() => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    prevBtn.off('click').click(() => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    dotsContainer.off('click').on('click', '.dot', function() {
        currentIndex = $(this).data('index');
        updateSlider();
        stopAutoPlay();
        startAutoPlay();
    });

    $(window).off('resize.blogSlider').on('resize.blogSlider', () => {
        renderDots();
        updateSlider();
    });

    track.hover(stopAutoPlay, startAutoPlay);
  }

  // --- Main Execution ---
  fetchAndRenderBanners();
  fetchAndRenderProducts();
  fetchAndRenderBlogs();
  
  // Initialize blog-specific features
  initBlogSearch();
  initCategoryFilter();
  initScrollToTop();
  
  // Initialize scroll animations for all pages
  initScrollAnimations();

  // Initialize Auth Modal
  initAuthModal();

});

function initAuthModal() {
  const modal = $('#auth-modal');
  const userBtn = $('.header-icons button').filter(function() {
    return $(this).find('.material-icons').text().trim() === 'person_outline';
  });
  const closeBtn = $('#close-auth-modal');
  const tabs = $('.auth-tab');
  const forms = $('.auth-form');

  // Open Modal
  userBtn.on('click', function() {
    modal.addClass('open');
    $('body').css('overflow', 'hidden'); // Prevent background scrolling
  });

  // Close Modal
  function closeModal() {
    modal.removeClass('open');
    $('body').css('overflow', '');
  }

  closeBtn.on('click', closeModal);

  // Close when clicking outside
  modal.on('click', function(e) {
    if ($(e.target).hasClass('auth-modal')) {
      closeModal();
    }
  });

  // Switch Tabs
  tabs.on('click', function() {
    const tab = $(this);
    const target = tab.data('tab');

    // Update Tab UI
    tabs.removeClass('active');
    tab.addClass('active');

    // Update Form UI
    forms.removeClass('active');
    if (target === 'login') {
      $('#login-form').addClass('active');
    } else {
      $('#register-form').addClass('active');
    }
  });

  // Form Submission (Simulation)
  $('#login-form, #register-form').on('submit', function(e) {
    e.preventDefault();
    const isLogin = $(this).attr('id') === 'login-form';
    const btn = $(this).find('button[type="submit"]');
    const originalText = btn.text();

    // Loading state
    btn.prop('disabled', true).html('<span class="material-icons spin" style="font-size: 16px; animation: spin 1s infinite linear;">refresh</span> Đang xử lý...');

    setTimeout(() => {
      btn.prop('disabled', false).text(originalText);
      alert(isLogin ? 'Đăng nhập thành công!' : 'Đăng ký thành công!');
      closeModal();
    }, 1500);
  });
}
