$(document).ready(function () {
  $('.changetheme').each(function () {
    const $container = $(this);
    const $sunIcon = $container.find('.icon-sun');
    const $moonIcon = $container.find('.icon-moon');

    $sunIcon.on('click', function () {
      $('html').attr('data-bs-theme', 'dark');
      $sunIcon.hide();
      $moonIcon.show();
    });

    $moonIcon.on('click', function () {
      $('html').attr('data-bs-theme', 'light');
      $moonIcon.hide();
      $sunIcon.show();
    });
  });
});


$(document).ready(function () {
  $('.password-wrapper').each(function () {
    const $wrapper = $(this);
    const $input = $wrapper.find('.password-input');
    const $showIcon = $wrapper.find('.show-password');
    const $hideIcon = $wrapper.find('.hide-password');

    $showIcon.on('click', function () {
      $input.attr('type', 'text');
      $showIcon.hide();
      $hideIcon.show();
    });

    $hideIcon.on('click', function () {
      $input.attr('type', 'password');
      $hideIcon.hide();
      $showIcon.show();
    });
  });
});


 new Swiper(".swiper", {
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });


document.getElementById('toggle-button').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
});

document.getElementById('close-button').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.remove('open'); // Remove the 'open' class to close the sidebar
});

// sidebar-dropdown
document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const dropdown = this.parentElement;
    
    // Close all other open dropdowns
    document.querySelectorAll('.dropdown.open').forEach(function(openDropdown) {
      if (openDropdown !== dropdown) {
        openDropdown.classList.remove('open');
      }
    });
    
    // Toggle the clicked dropdown
    dropdown.classList.toggle('open');
  });
});

// sidebar-dropdown









