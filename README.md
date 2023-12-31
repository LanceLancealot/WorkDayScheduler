# Work Day Scheduler

## Overview

The Work Day Scheduler is a simple calendar application that allows users to schedule events for each hour of a typical working day (9 AM to 5 PM). This web app dynamically updates the HTML and CSS using jQuery and utilizes the Day.js library to manage date and time functionality. Users can create, save, and persist events for effective time management.

LINK: https://lancelancealot.github.io/WorkDayScheduler/

SCREENSHOT:

![Alt text](<./assets/Screenshot (5).png>)


## Features

- **Current Date Display:** The current date is prominently displayed at the top of the calendar for easy reference.

- **Time Blocks:** Time blocks are presented for standard business hours, from 9 AM to 5 PM.

- **Color Coding:** Time blocks are color-coded to indicate whether they are in the past, present, or future, providing visual cues for scheduling.

- **Event Creation:** Users can click on a time block to enter an event for that specific hour.

- **Event Saving:** Events can be saved for each time block, and the text for each event is stored in local storage.

- **Persistence:** Saved events persist even after refreshing the page, ensuring that users don't lose their schedule.

## Usage

1. Open the Work Day Scheduler in your web browser.

2. The current date is displayed at the top of the page.

3. Scroll down to view the time blocks for the day.

4. Each time block is color-coded to indicate its status:
   - Gray: Past
   - Red: Present
   - Green: Future

5. Click on a time block to enter an event for that hour.

6. Click the "Save" button to save the event for that time block.

7. Saved events are stored in local storage and persist even after page refresh.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Day.js

## Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/LanceLancealot/WorkDayScheduler.git
