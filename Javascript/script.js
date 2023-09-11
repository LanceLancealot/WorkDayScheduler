$(function () {
  // Function to update time-block classes
  function updateTimeBlocks() {
    // Get the current hour using Day.js (in 12-hour format with AM/PM)
    var currentHour = dayjs().format("hA");

    // Loop through each time-block from 9am to 5pm
    for (var blockHour = 9; blockHour <= 17; blockHour++) {
      var blockID = "#hour-" + blockHour;

      // Check if the block exists, if not, create it
      if ($(blockID).length === 0) {
        // Create the time block and append it to the container
        var timeBlockHTML = `
          <div id="${blockID.slice(1)}" class="row time-block">
            <div class="col-2 col-md-1 hour text-center py-3">${blockHour > 12 ? blockHour - 12 + "PM" : blockHour + "AM"}</div>
            <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
            <button class="btn saveBtn col-2 col-md-1" aria-label="save">
              <i class="fas fa-save" aria-hidden="true"></i>
            </button>
          </div>
        `;
        $(".container-fluid").append(timeBlockHTML);
      }

      // Apply past, present, or future classes based on the current hour
      if (blockHour < currentHour) {
        $(blockID).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $(blockID).removeClass("past future").addClass("present");
      } else {
        $(blockID).removeClass("past present").addClass("future");
      }
    }
  }

  // Function to load user input from local storage
  function loadUserInput() {
    // Loop through each time-block from 9am to 5pm
    for (var blockHour = 9; blockHour <= 17; blockHour++) {
      var blockID = "#hour-" + blockHour;
      var savedInput = localStorage.getItem(blockID);

      // Set the textarea value to the saved input
      $(blockID + " .description").val(savedInput);
    }
  }

  // Function to save user input to local storage
  function saveUserInput() {
    // Loop through each time-block from 9am to 5pm
    for (var blockHour = 9; blockHour <= 17; blockHour++) {
      var blockID = "#hour-" + blockHour;
      var userInput = $(blockID + " .description").val();

      // Save the user input to local storage using the block's ID as the key
      localStorage.setItem(blockID, userInput);
    }
  }

  // Display the current date in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Call the functions to initialize and update the page
  updateTimeBlocks();
  loadUserInput();

  // Add click event listener to save buttons
  $(".saveBtn").on("click", function () {
    // Save user input to local storage
    saveUserInput();
  });
});
