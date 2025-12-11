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
    },
    {
      id: 10,
      title: "Bảo dưỡng Guitar điện: Những điều cần biết",
      category: "Guitar",
      date: "18/06/2023",
      image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1974&auto=format&fit=crop",
      desc: "Cách vệ sinh, thay dây và bảo quản guitar điện để đảm bảo tuổi thọ và chất lượng âm thanh tốt nhất."
    },
    {
      id: 11,
      title: "Luyện ngón Piano: Các bài tập Scale cơ bản",
      category: "Piano",
      date: "15/06/2023",
      image: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop",
      desc: "Tổng hợp các bài tập chạy ngón scale giúp tăng độ linh hoạt và chính xác cho đôi tay của bạn."
    },
    {
      id: 12,
      title: "Cajon: Nhạc cụ bộ gõ nhỏ gọn đầy thú vị",
      category: "Trống",
      date: "12/06/2023",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop",
      desc: "Tại sao Cajon lại được ưa chuộng trong các buổi acoustic? Hướng dẫn cơ bản cho người mới bắt đầu."
    },
    {
      id: 13,
      title: "Cách chọn Vĩ (Bow) phù hợp cho đàn Violin",
      category: "Violin",
      date: "10/06/2023",
      image: "https://images.unsplash.com/photo-1465821185993-2915db90faaf?q=80&w=2134&auto=format&fit=crop",
      desc: "Vĩ đàn ảnh hưởng rất lớn đến âm thanh. Tìm hiểu cách chọn vĩ phù hợp với trình độ và cây đàn của bạn."
    },
    {
      id: 14,
      title: "Kỹ thuật lấy hơi khi chơi sáo và kèn",
      category: "Sáo",
      date: "08/06/2023",
      image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
      desc: "Làm chủ hơi thở là chìa khóa để chơi tốt các nhạc cụ hơi. Các bài tập thở bụng hiệu quả."
    },
    {
      id: 15,
      title: "Nhạc lý căn bản: Tại sao bạn nên học?",
      category: "Guitar",
      date: "05/06/2023",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=2070&auto=format&fit=crop",
      desc: "Hiểu về nhạc lý giúp bạn chơi nhạc một cách chủ động, sáng tạo và giao tiếp tốt hơn với các nhạc công khác."
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
    // initScrollAnimations(); // Removed to prevent double initialization/resetting
  }

  function fetchAndRenderBlogs() {
    const blogTrack = $('#blog-track');
    
    // Check if we are on the blog page
    if (blogTrack.length === 0) {
      return;
    }

    const blogs = staticData.blogs;
    
    // 1. Render Slider (Featured - first 5)
    blogTrack.empty();
    const sliderBlogs = blogs.slice(0, 5); 
    
    if (sliderBlogs.length === 0) {
       blogTrack.html('<p class="text-center w-full">Không có bài viết nào.</p>');
    } else {
        sliderBlogs.forEach((blog) => {
          const card = $(createBlogCard(blog));
           // Set initial state for scroll animation
           card.css({
               'opacity': '0',
               'transform': 'translateY(30px)',
               'transition': 'all 0.6s ease-out' 
           });
          blogTrack.append(card);
        });
        initBlogSlider();
        
        // Trigger scroll check to reveal slider items
        setTimeout(() => {
          $(window).trigger('scroll');
        }, 100);
    }

    // 2. Initialize Grid with Pagination & Filtering
    initUnifiedBlogLogic(blogs);
  }

  // Unified Blog Logic (Search, Filter, Pagination)
  function initUnifiedBlogLogic(allBlogs) {
    const blogGrid = $('#blog-grid');
    const loadMoreBtn = $('#load-more-btn');
    const searchInput = $('#blog-search');
    const searchBtn = $('.search-btn'); // Matches HTML class
    const categoryPills = $('.category-pill');
    
    // State
    let state = {
      items: [...allBlogs], // Start with all blogs
      filteredItems: [...allBlogs],
      currentPage: 1,
      itemsPerPage: 6,
      currentFilter: 'all',
      searchQuery: ''
    };

    // Initial Render
    renderGrid();

    // Event Listeners
    
    // 1. Load More
    loadMoreBtn.on('click', function() {
      state.currentPage++;
      renderGrid(true); // true = append
    });

    // 2. Category Filter
    categoryPills.on('click', function() {
      const category = $(this).data('category');
      
      // Update UI
      categoryPills.removeClass('active');
      $(this).addClass('active');
      
      // Update State
      state.currentFilter = category;
      state.currentPage = 1;
      applyFilters();
    });

    // 3. Search
    function performSearch() {
      const query = searchInput.val().toLowerCase().trim();
      state.searchQuery = query;
      state.currentPage = 1;
      applyFilters();
    }

    searchBtn.on('click', performSearch);
    searchInput.on('keyup', function(e) {
      if (e.key === 'Enter') performSearch();
    });

    // Core Functions

    function applyFilters() {
      // Filter by Category
      let result = state.items;
      
      if (state.currentFilter !== 'all') {
        result = result.filter(blog => 
             blog.category.toLowerCase() === state.currentFilter.toLowerCase()
        );
      }

      // Filter by Search
      if (state.searchQuery) {
        result = result.filter(blog => 
          blog.title.toLowerCase().includes(state.searchQuery) ||
          blog.desc.toLowerCase().includes(state.searchQuery) ||
          blog.category.toLowerCase().includes(state.searchQuery)
        );
      }

      state.filteredItems = result;
      renderGrid(false); // false = reset grid
    }

    function renderGrid(append = false) {
      if (!append) {
        blogGrid.empty();
        blogGrid.show(); // Ensure container is visible
      }

      const start = 0; 
      
      let sliceStart = (state.currentPage - 1) * state.itemsPerPage;
      let sliceEnd = state.currentPage * state.itemsPerPage;
      
      if (!append) {
          sliceStart = 0;
          sliceEnd = state.itemsPerPage;
      }

      const itemsToShow = state.filteredItems.slice(sliceStart, sliceEnd);
      console.log('Rendering grid items:', itemsToShow.length, 'Append:', append);
      
      if (itemsToShow.length === 0 && !append) {
        blogGrid.html('<div class="w-full text-center py-8"><p class="text-gray-500">Không tìm thấy bài viết nào.</p></div>');
        loadMoreBtn.parent().hide();
        return;
      }

      itemsToShow.forEach(blog => {
        const card = $(createBlogCard(blog));
        blogGrid.append(card);
      });

      // Update Load More Button visibility
      if (sliceEnd >= state.filteredItems.length) {
        loadMoreBtn.parent().fadeOut();
      } else {
        loadMoreBtn.parent().fadeIn();
        loadMoreBtn.prop('disabled', false).find('.btn-text').text('Xem thêm');
        loadMoreBtn.find('.btn-icon').show();
      }

      // Trigger scroll check to reveal items
      setTimeout(() => {
          $(window).trigger('scroll');
      }, 100);
    }
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

  function initScrollAnimations() {
    function checkScroll() {
      const triggerBottom = window.innerHeight * 0.8;
      
      $('.product-card, .feature-item, .testimonial-card, .section-heading, .blog-card').each(function() {
        const top = $(this)[0].getBoundingClientRect().top;
        if (top < triggerBottom) {
          $(this).addClass('visible');
          $(this).css({
            'opacity': '1',
            'transform': 'translateY(0)'
          });
        }
      });
    }

    // Initial styles
    $('.product-card, .feature-item, .testimonial-card, .section-heading, .blog-card').not('.visible').css({
      'opacity': '0',
      'transform': 'translateY(30px)',
      'transition': 'all 0.6s ease-out'
    });

    window.removeEventListener('scroll', checkScroll);
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }


  function initBlogSlider() {
    const track = $('#blog-track');
    const cards = track.find('.blog-card');
    const prevBtn = $('#blog-prev');
    const nextBtn = $('#blog-next');
    const dotsContainer = $('#blog-dots');
    
    // Safety check
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
       const maxIndex = Math.max(0, cards.length - visibleItems); 
       
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

// --- Missing Slider Initializations ---

function initBannerSlider() {
  const slider = $('#banner-slider');
  const slides = slider.find('.slide');
  const prevBtn = $('#banner-prevBtn');
  const nextBtn = $('#banner-nextBtn');
  
  if (slider.length === 0 || slides.length === 0) return;

  let currentIndex = 0;
  let interval;

  // Initial setup: Show first slide, hide others (Simple visibility toggle or transform)
  // Assuming CSS handles basic layout, we'll just toggle a class or style
  slides.hide().first().show();

  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.fadeOut(300);
    slides.eq(currentIndex).fadeIn(300);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto-play
  function startAutoPlay() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  // Event Listeners
  nextBtn.click(() => {
    nextSlide();
    startAutoPlay();
  });

  prevBtn.click(() => {
    prevSlide();
    startAutoPlay();
  });

  slider.hover(stopAutoPlay, startAutoPlay);

  startAutoPlay();
}

function initProductSlider() {
  const track = $('.product-track');
  const prevBtn = $('.nav-btn.prev-product');
  const nextBtn = $('.nav-btn.next-product');

  if (track.length === 0) return;

  // Simple scroll-based slider
  const scrollAmount = 320; // Approx card width + gap

  nextBtn.click(() => {
    track.animate({ scrollLeft: track.scrollLeft() + scrollAmount }, 300);
  });

  prevBtn.click(() => {
    track.animate({ scrollLeft: track.scrollLeft() - scrollAmount }, 300);
  });
}
