// Get the elements
            var showPopup = document.getElementById("showPopup");
            var closePopup = document.getElementById("closePopup");
            var popupMenu = document.getElementById("popupMenu");
            var overlay = document.getElementById("overlay");

            // Show the popup and overlay when the rectangle is clicked
            showPopup.addEventListener("click", function() {
                popupMenu.style.display = "block";  // Show the pop-up
                overlay.style.display = "block";   // Show the overlay
            });

            // Close the popup and overlay when the close button is clicked
            closePopup.addEventListener("click", function() {
                popupMenu.style.display = "none";  // Hide the pop-up
                overlay.style.display = "none";   // Hide the overlay
            });

            // Close the popup if the overlay (background) is clicked
            overlay.addEventListener("click", function() {
                popupMenu.style.display = "none";  // Hide the pop-up
                overlay.style.display = "none";   // Hide the overlay
            });