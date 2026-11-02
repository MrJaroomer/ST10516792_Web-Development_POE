// Wait for the browser to fully load the page before running any code
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. SET UP THE INTERACTIVE MAP
    // ==========================================
    const mapContainer = document.getElementById("school-map");
    
    // If the map div isn't manually in the HTML, build it automatically on the contact page
    if (!mapContainer && window.location.pathname.includes("contact.html")) {
        const mainContent = document.querySelector("main");
        if (mainContent) {
            const heading = document.createElement("h3");
            heading.textContent = "Find Our Campus Location";
            heading.style.marginTop = "30px";
            
            const mapDiv = document.createElement("div");
            mapDiv.id = "school-map";
            mapDiv.style.width = "100%";
            mapDiv.style.height = "320px";
            mapDiv.style.marginTop = "10px";
            mapDiv.style.border = "1px solid #ccc";
            mapDiv.style.borderRadius = "4px";
            
            mainContent.appendChild(heading);
            mainContent.appendChild(mapDiv);
            initializeMap();
        }
    } else if (mapContainer) {
        initializeMap();
    }

    // Function to load and show the map using Leaflet
    function initializeMap() {
        if (typeof L !== "undefined") {
            // Real map coordinates for the school on Koeberg Road, Brooklyn
            const schoolLoc = [-33.8943, 18.4891]; 
            const map = L.map("school-map").setView(schoolLoc, 15);
            
            // Load map images from OpenStreetMap
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            
            // Drop a pin marker exactly on the school location
            L.marker(schoolLoc).addTo(map)
                .bindPopup("<strong>Holy Cross Convent Primary School</strong><br>162 Koeberg Road")
                .openPopup();
        }
    }

    // ==========================================
    // 2. IMAGE LIGHTBOX GALLERY
    // ==========================================
    const images = document.querySelectorAll(".facility-card img");
    if (images.length > 0) {
        // Create the dark background overlay for when an image is clicked
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0"; overlay.style.left = "0"; 
        overlay.style.width = "100vw"; overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0,0,0,0.85)"; 
        overlay.style.display = "none";
        overlay.style.justifyContent = "center"; 
        overlay.style.alignItems = "center"; 
        overlay.style.zIndex = "3000";
        
        // Create the image element that goes inside the overlay
        const overlayImg = document.createElement("img");
        overlayImg.style.maxWidth = "80%"; 
        overlayImg.style.maxHeight = "80%";
        overlayImg.style.border = "4px solid white";
        overlayImg.style.borderRadius = "4px";
        
        overlay.appendChild(overlayImg);
        document.body.appendChild(overlay);

        // Make images clickable and set them to open up in the overlay
        images.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                overlayImg.src = img.src;
                overlayImg.alt = img.alt;
                overlay.style.display = "flex";
            });
        });
        
        // Hide the big image overlay when clicked anywhere on the screen
        overlay.addEventListener("click", () => overlay.style.display = "none");
    }

    // ==========================================
    // 3. CAMPUS SEARCH FILTER (services.html)
    // ==========================================
    const curriculumContent = document.querySelector("main");
    if (window.location.pathname.includes("services.html") && curriculumContent) {
        // Create the search box input element
        const searchWrapper = document.createElement("div");
        searchWrapper.style.margin = "20px 0";
        
        const searchLabel = document.createElement("p");
        searchLabel.innerHTML = "<strong>Search Campus Facilities or Documents:</strong>";
        
        const searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Type keywords here (e.g. 'Library', 'Conduct', 'Policy')...";
        searchInput.style.width = "100%"; searchInput.style.padding = "10px"; searchInput.style.marginTop = "5px";
        
        searchWrapper.appendChild(searchLabel);
        searchWrapper.appendChild(searchInput);
        
        // Put the search box right beneath the first paragraph of the page
        const firstParagraph = curriculumContent.querySelector("p");
        if (firstParagraph) {
            firstParagraph.parentNode.insertBefore(searchWrapper, firstParagraph.nextSibling);
        } else {
            curriculumContent.insertBefore(searchWrapper, curriculumContent.firstChild);
        }

        const facilityCards = document.querySelectorAll(".facility-card");
        const downloadItems = document.querySelectorAll("#downloads ul li");

        // Filter cards and files as the user types
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            // Loop through facility cards
            facilityCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(searchTerm) ? "block" : "none";
            });
            
            // Loop through download list links
            downloadItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchTerm) ? "list-item" : "none";
            });
        });
    }

    // ==========================================
    // 4. FORM CHECKING & SUBMIT FUNCTION
    // ==========================================
    const activeForms = document.querySelectorAll("form");
    activeForms.forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop the page from reloading when clicking submit
            
            // Clear out any old error messages from a previous attempt
            let oldMsg = form.querySelector(".form-notice-box");
            if (oldMsg) oldMsg.remove();
            
            const textFields = form.querySelectorAll('input[type="text"]');
            const phoneField = form.querySelector('input[type="tel"]') || form.querySelector('input[name="phone"]');
            let formIsValid = true;
            let errorText = "";

            // Check if name fields are filled in properly (at least 3 letters)
            textFields.forEach(input => {
                if (input.value.trim().length < 3) {
                    formIsValid = false;
                    errorText = "Please enter a valid full name (minimum 3 characters).";
                }
            });

            // Make sure phone number fits standard South African 10-digit formats starting with 0
            if (phoneField) {
                const numbersOnly = phoneField.value.trim().replace(/\s+/g, "");
                const saPhonePattern = /^0[0-9]{9}$/; 
                if (!saPhonePattern.test(numbersOnly)) {
                    formIsValid = false;
                    errorText = "Please enter a valid 10-digit phone number starting with 0 (e.g. 0215114337).";
                }
            }

            // Create the notification alert box element
            const noticeBox = document.createElement("p");
            noticeBox.className = "form-notice-box";
            noticeBox.style.fontWeight = "bold";
            noticeBox.style.marginTop = "15px";
            noticeBox.style.padding = "10px";
            noticeBox.style.borderRadius = "4px";

            // If the validation fails, show the error alert box
            if (!formIsValid) {
                noticeBox.style.color = "#991b1b";
                noticeBox.style.backgroundColor = "#fee2e2";
                noticeBox.style.border = "1px solid #fca5a5";
                noticeBox.textContent = errorText;
                form.appendChild(noticeBox);
                return;
            }

            // Fake an AJAX form submission to display interactive user feedback
            noticeBox.style.color = "#1e40af";
            noticeBox.style.backgroundColor = "#eff6ff";
            noticeBox.style.border = "1px solid #bfdbfe";
            noticeBox.textContent = "Sending application details securely via AJAX...";
            form.appendChild(noticeBox);

            // Change to a green success message after a brief delay without reloading the tab
            setTimeout(() => {
                noticeBox.style.color = "#166534";
                noticeBox.style.backgroundColor = "#dcfce7";
                noticeBox.style.border = "1px solid #bbf7d0";
                noticeBox.textContent = "Success! Form details submitted safely without reloading the browser window.";
                form.reset();
            }, 1600);
        });
    });
});
