document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('cars-table');
    var sortSelect = document.getElementById('sort-select');
    var carData = [
      {
        brand: 'Toyota',
        make: 'Corolla',
        model: 'S',
        year: 2023,
        fuelEfficiency: '30 MPG',
        reliability: '9/10',
        safety: '9/10'
      },
      {
        brand: 'Honda',
        make: 'Civic',
        model: 'EX',
        year: 2023,
        fuelEfficiency: '32 MPG',
        reliability: '8/10',
        safety: '8/10'
      },
      // Add more car data here
    ];
  
    // Display the initial car data
    displayCarData(carData);
  
    // Add event listener for sort selection change
    sortSelect.addEventListener('change', sortTable);
  
    // Function to display car data in the table
    function displayCarData(data) {
      var tbody = table.querySelector('tbody');
      tbody.innerHTML = '';
  
      data.forEach(function(car) {
        var row = document.createElement('tr');
  
        for (var key in car) {
          if (car.hasOwnProperty(key)) {
            var cell = document.createElement('td');
            cell.textContent = car[key];
            row.appendChild(cell);
          }
        }
  
        tbody.appendChild(row);
      });
    }
  
    // Function to sort the table based on the selected sort option
    function sortTable() {
      var sortKey = sortSelect.value;
      var tbody = table.querySelector('tbody');
      var rows = Array.from(tbody.querySelectorAll('tr'));
  
      rows.sort(function(a, b) {
        var cellA = a.querySelector('td:nth-child(' + (sortSelect.selectedIndex + 1) + ')').textContent;
        var cellB = b.querySelector('td:nth-child(' + (sortSelect.selectedIndex + 1) + ')').textContent;
  
        if (sortKey === 'year') {
          cellA = parseInt(cellA);
          cellB = parseInt(cellB);
        }
  
        if (cellA < cellB) {
          return -1;
        } else if (cellA > cellB) {
          return 1;
        }
        return 0;
      });
  
      rows.forEach(function(row) {
        tbody.appendChild(row);
      });
    }
  
    var addReviewBtn = document.getElementById('add-review-btn');
    var addReviewPopup = document.getElementById('add-review-popup');
    var closeReviewPopupBtn = document.getElementById('close-review-popup');
    var addReviewForm = document.getElementById('add-review-form');
    var brandInput = document.getElementById('brand-input');
    var makeInput = document.getElementById('make-input');
    var modelInput = document.getElementById('model-input');
    var yearInput = document.getElementById('year-input');
    var fuelEfficiencyInput = document.getElementById('fuel-efficiency-input');
    var reliabilityInput = document.getElementById('reliability-input');
    var safetyInput = document.getElementById('safety-input');
  
    // Show add review popup when add review button is clicked
    addReviewBtn.addEventListener('click', function(event) {
      event.preventDefault();
      addReviewPopup.style.display = 'flex';
    });
  
    // Hide add review popup when close button is clicked
    closeReviewPopupBtn.addEventListener('click', function(event) {
      event.preventDefault();
      addReviewPopup.style.display = 'none';
    });
  
    // Submit form when add review button is clicked
    addReviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var brand = brandInput.value;
      var make = makeInput.value;
      var model = modelInput.value;
      var year = parseInt(yearInput.value);
      var fuelEfficiency = fuelEfficiencyInput.value;
      var reliability = reliabilityInput.value;
      var safety = safetyInput.value;
  
      var newReview = {
        brand: brand,
        make: make,
        model: model,
        year: year,
        fuelEfficiency: fuelEfficiency,
        reliability: reliability,
        safety: safety
      };
  
      carData.push(newReview);
      displayCarData(carData);
  
      // Reset form inputs
      addReviewForm.reset();
  
      // Close add review popup
      addReviewPopup.style.display = 'none';
    });
  
    var registerBtn = document.getElementById('register-btn');
    var popup = document.getElementById('popup');
    var closePopupBtn = document.getElementById('close-popup');
    var loginForm = document.getElementById('login-form');
    var usernameInput = document.getElementById('username-input');
    var passwordInput = document.getElementById('password-input');
  
    // Show popup when register button is clicked
    registerBtn.addEventListener('click', function(event) {
      event.preventDefault();
      popup.style.display = 'flex';
    });
  
    // Hide popup when close button is clicked
    closePopupBtn.addEventListener('click', function(event) {
      event.preventDefault();
      popup.style.display = 'none';
    });
  
    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var username = usernameInput.value;
      var password = passwordInput.value;
      // Add your login logic here
      console.log('Username: ' + username);
      console.log('Password: ' + password);
      // Reset form inputs
      loginForm.reset();
      // Close popup
      popup.style.display = 'none';
    });
  });
  