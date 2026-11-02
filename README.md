# Holy Cross Assignment

## Why I Built This Website & Who It Is For
I designed this portal to be a simple, helpful space for two groups of people: current parents who need a quick way to check school dates, and new parents looking to enroll their kids. I used real details from Holy Cross Brooklyn (like their actual address at 162 Koeberg Road and their principal's name) to make the site feel genuine. The curriculum sections match the real WCED primary subjects so that the information looks real and helpful to anyone visiting the site.

This is my complete project folder for the Holy Cross Convent Primary School portal website. I have included all my initial prep work, research, and design files along with the final site code.

## Folder Structure

* Chosen Proposal - The layout and design brief I chose to build.
* Proposals - Early brainstorming ideas and layout versions.
* Research - Background info on the school, target audience, and content.
* Website - The live code files for the pages:
  - index.html (Home page with the school banner, notice board, and new welcome info)
  - about.html (About page with school history and our three main promises)
  - services.html (Curriculum page with the uniform layout grid and grade phase lists)
  - enquiry.html (The online application form for parents with name length checks)
  - contact.html (Contact details, message form, and live street map box)
  - css/styles.css (External stylesheet for all fonts, responsive media queries, and themes)
  - script.js (The main JavaScript file handling the map filters, image gallery click popups, list search box, and form inputs validation)

## How to run the code

1. Download the whole project folder to your desktop.
2. Open the main directory and click into the "Website" folder.
3. Double-click the index.html file to open the portal homepage inside your default web browser (Chrome, Edge, Safari, etc.).
4. Go to the Curriculum page to try the text filtering search box, or visit the Contact page to view the live street map and input form validations.

## Updates made for Part 2

I added a few adjustments to the styles file to make it cleaner and meet the new requirements:
- Added a basic universal browser reset to clear default margins and padding conflicts.
- Swapped hardcoded px sizes for relative rem and percentage values so layout containers and fonts scale naturally.
- Put in focus and active pseudo-classes on navigation links and inputs so they react when clicked or tabbed into.
- Used a responsive picture tag for the main homepage banner to handle mobile loading speeds better.

## Updates made for Part 3

I added these new features using simple JavaScript and text configuration files to satisfy the project requirements and improve the sparse layout feedback:
- **Expanded School Text Content:** I added realistic, human-sounding paragraphs across the pages describing Grade 0 (Pre-Grade R), Foundation Phase, Intermediate Phase, and Senior Phase school subject tracks.
- **Leaflet Map Integration:** I put an interactive street map on the contact page using Leaflet that drops a pin marker directly on 162 Koeberg Road in Brooklyn. I also added a simple map search input box right above it to dim or highlight the pin.
- **Image Lightbox Gallery:** Clicking on any of the four school campus pictures now displays a big image modal overlay popup with a clean dark backdrop.
- **Live Curriculum List Search:** I built a keyword text search bar right into the curriculum page. As you type, it screens through your facility cards and the 7 PDF download list items, instantly hiding or listing matching elements.
- **Asynchronous Form Checks (AJAX):** Both forms now use JavaScript to intercept submits, freeze standard page refreshes, and check rules (ensuring names are at least 3 letters long and mobile lines fit a clean South African 10-digit format starting with 0). It shows a blue "sending" notification and then switches to a green success panel without breaking the tab grid layout.
- **Technical SEO Configuration:** I dropped a clean `robots.txt` configuration line and a structured tracking `sitemap.xml` schema map file directly into the primary folder root next to my homepage.

## Project Reference Sources
- Western Cape Education Department school operational rules and instructional curriculum guidelines (2026).
- LeafletJS open-source map interface application rendering documentation parameters (2026).
- Mozilla Developer Network (MDN) Web Docs arrays screening methods, string matching loops, and form control validations guides (2026).
