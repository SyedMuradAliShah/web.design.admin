$(document).ready(function() {
  // When moon icon is clicked, switch to dark mode and show the sun icon
  $('#fa-sun').click(function() {
    $('html').attr('data-bs-theme', 'dark'); // Set theme to dark
    $('#fa-sun').hide(); // Hide moon icon
    $('#fa-moon').show();  // Show sun icon
  });

  // When sun icon is clicked, switch to light mode and show the moon icon
  $('#fa-moon').click(function() {
    $('html').attr('data-bs-theme', 'light'); // Set theme to light
    $('#fa-moon').hide(); // Hide sun icon
    $('#fa-sun').show(); // Show moon icon
  });
});

$(document).ready(function() {
  // When eye icon is clicked, show the eye-slash and change input type to text
  $('#fa-eye').click(function() {
    $('#fa-eye').hide(); // Hide eye icon
    $('#fa-eye-slash').show();  // Show eye-slash icon
    $('#password').attr('type', 'text'); // Change password input to text
  });

  // When eye-slash icon is clicked, show the eye and change input type back to password
  $('#fa-eye-slash').click(function() {
    $('#fa-eye-slash').hide(); // Hide eye-slash icon
    $('#fa-eye').show(); // Show eye icon
    $('#password').attr('type', 'password'); // Change input type back to password
  });
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

// charts
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// charts
// donutcharts
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: 'donut'
  },
  labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'], // Labels are required but will be hidden
  dataLabels: {
    enabled: false // Hides data labels from the chart itself
  },
  legend: {
    show: false // Hides the legend
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#donutchart"), options);
chart.render();

// donutcharts
