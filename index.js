/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
themeButton.addEventListener("click", toggleDarkMode);
//             and tell it to use toggleDarkMode as its callback function


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const form = document.getElementById('rsvp-form');


const addParticipant = (event) => {
    event.preventDefault(); // prevent form reload

    let names = document.getElementById('faith').value;
    let email = document.getElementById("email").value;
    let states = document.getElementById("states").value;
    let allergies = document.getElementById("allergies").value;

    // Create new <p> element
    let participantInfo = document.createElement("p");

    // Set the content of the <p>
    participantInfo.innerText = `🎟️ ${names} from ${states} just RSVP'd!`;

    // Append to rsvp-participants <div>
    document.querySelector(".rsvp-participants").appendChild(participantInfo);
    //above is for classes, NOT ID'S
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
    containsErrors = true;
    rsvpInputs[i].classList.add("error");
    } else {
    rsvpInputs[i].classList.remove("error");
    }
  }


  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields
  if (containsErrors === false) {
    addParticipant(); // Call the RSVP handler
  }
  for (let i = 0; i < rsvpInputs.length; i++) {
    rsvpInputs[i].value = ""; // Clear each input field
  }
}


// Step 3: Replace the form button's event listener with a new one that calls validateForm()
form.addEventListener("submit", validateForm); 

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
