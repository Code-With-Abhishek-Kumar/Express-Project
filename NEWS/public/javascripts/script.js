

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoScroll()

// document.getElementById('Search').addEventListener('click', function(event) {
//   // event.preventDefault(); // Prevents the default form submission behavior

//   const searchInput = document.getElementById('searchInput');
//   const searchQuery = searchInput.value || 'irctc';
  
//   // Now you can use the searchQuery as needed, for example, you might want to send it to the server
//   // using AJAX (fetch, axios, etc.) or update the UI.
  
//   console.log('Search Query:', searchQuery);
  
//   // Add your logic to send the searchQuery to the server or update the UI as needed
// });




const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');



 // Add an event listener for the Enter key press
 searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    // On Enter key press, send the search query to the server using Axios
    sendSearchQuery();
  }
});

// Alternatively, you can use a button click to trigger the search
searchButton.addEventListener('click', function() {
  sendSearchQuery();
});

function sendSearchQuery() {
  const searchQuery = searchInput.value;




  // Send the search query to the server using Axios
  axios.get(`/search?q=${searchQuery}`)
    .then(response => {
      // Handle the data received from the server
      console.log('Data from server:', response.data);
    })
    .catch(error => {
      console.error('Error fetching data from server:', error.message);
    });
}

