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


const addParticipant = (person) => {
  // ✅ Create a new <p> element
  let participantInfo = document.createElement("p");

  // ✅ Use only data from the person object
  participantInfo.innerText = `🎟️ ${person.myFaith} from ${person.myHometown} just RSVP'd!`;

  // ✅ Append to the participants container
  document.querySelector(".rsvp-participants").appendChild(participantInfo);
};

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

  const rsvpInputs = document.getElementById("rsvp-form").elements;

  // 👤 Create the person object from form inputs
  const person = {
    myFaith: rsvpInputs[0].value,
    myEmail: rsvpInputs[1].value,
    myHometown: rsvpInputs[2].value
  };

  // 🔁 Validate each value using Object.entries
  const fields = Object.entries(person);
  for (let i = 0; i < fields.length; i++) {
    const [key, value] = fields[i];
    if (value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }

  // ✅ If all inputs are valid:
  if (containsErrors === false) {
    addParticipant(person); // 🔥 Pass the object to the RSVP handler
    toggleModal(person);

    // 🧽 Clear form fields
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
};



// Step 3: Replace the form button's event listener with a new one that calls validateForm()
form.addEventListener("submit", validateForm); 

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
const toggleModal = (person) => {
  const modal = document.getElementById("success-modal");
  const modalContent = document.getElementById("modal-item");

  // Style-related: show modal
  modal.style.display = "flex";

  // Update modal content with a personalized message
  modalContent.innerText = `🎉 Thank you, ${person.myFaith} from ${person.myHometown}! Your RSVP has been received.`;

  // Optional: Add more styling dynamically if needed
  // modalContent.style.color = "green"; // example

  // Hide modal after 5 seconds
  let intervalId = setInterval(animateImage, 500);
setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
}, 5000);
};
// Step 1: Create animation variables
let rotateFactor = 0; // Starts at 0
let modalImage = document.getElementById("modal-image"); // Make sure your image has this ID

// Step 2: Create the animateImage function
const animateImage = () => {
  // Toggle the rotation angle
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }

  // Apply the rotation using CSS transform
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};
