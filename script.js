// Header Js

// ------Toggle Mobile Menu------

const MenuWrapper = document.querySelector(".menu_wrapper");
const BtnMobile = document.querySelector(".menu__mobile");

BtnMobile.addEventListener("click", () => MenuWrapper.classList.toggle("menu__active"));

// ----scrolling header----

const header = document.querySelector('header');

window.onscroll = () => {
    if (scrollY >= 60) {
        header.classList.add("sticky_header");
    } else {
        header.classList.remove("sticky_header");
    }
};


// Works Js

// ------FiterBtn----------

const filterWorks = document.querySelector(".filterWorks");
const FilterBtnsWorks = document.querySelector(".Filter_btns_works");
if (filterWorks) {
    filterWorks.addEventListener("click", () => FilterBtnsWorks.classList.toggle("Filter_btns_works_active"));
}
// ---------Modal---------

const CloseModal = document.querySelector(".CloseModal div");
const Modal = document.querySelector(".Modal");
const show_details = document.querySelectorAll(".show_details span");

if (show_details && CloseModal) {
    show_details.forEach(show_detail => {
        show_detail.addEventListener("click", () => Modal.classList.add("ActiveModal"));
        CloseModal.addEventListener("click", () => Modal.classList.remove("ActiveModal"));
    });
}

// Scroll animation
ScrollReveal().reveal('section .container');

//   loader
// Hide the loader after the page fully loads and after a delay
window.addEventListener('load', function () {
    setTimeout(function () {
        const loader = document.querySelector('.loader_wrapper');
        loader.style.display = 'none';
    }, 1000); // 1-second delay
});

// Forms validation
function handleFormSubmit(event, successMessage) {
    event.preventDefault(); // Prevent the default form submission

    // Check that all required fields are filled
    const inputs = event.target.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(function (input) {
        if (input.value.trim() === "") {
            isValid = false;
        }
    });

    if (isValid) {
        showNotification(successMessage); // Show the success notification
        clearForm(event.target); // Reset the form
    } else {
        alert('Please fill out all required fields before submitting.');
    }
}

function showNotification(message) {
    const notification = document.getElementById("successMessage");
    notification.innerHTML = message; // Update the message
    notification.style.display = "block"; // Show the notification

    // The message disappears after 3 seconds
    setTimeout(function () {
        notification.style.display = "none";
    }, 3000);
}

// Function to clear the form fields
function clearForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        input.value = ""; // Reset the value of each field
    });
}

// filter works
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("work_item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementsByClassName("BTN_Container")[0];
if (btnContainer) { 
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active_btn");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active_btn", "");
      }
      this.className += " active_btn";
    });
  }
}


// Scroll to top
let scrollProgress = document.getElementById("scrollTopBtn");
window.addEventListener('scroll', () => {
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.style.background = `conic-gradient(var(--secondary-color) ${scrollValue}%, var(--white-color) ${scrollValue}%)`; 
});

// Remonter en haut lors du clic
scrollProgress.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





