onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Set a timeout for 7 seconds (7000 milliseconds)
    setTimeout(function() {
        // Show the "Next" button after 7 seconds
        document.getElementById('nextButton').style.display = 'block';
    }, 7000);
});
