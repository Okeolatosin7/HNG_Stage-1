document.addEventListener("DOMContentLoaded", function () {
  // Function to update the current day of the week
  function updateDayOfWeek() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
      currentDay;
  }

  // Function to update the current UTC time in milliseconds
  function updateUTCTime() {
    const currentDate = new Date();
    const currentMilliseconds = currentDate.getUTCMilliseconds();
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
      currentMilliseconds + " ms";
  }

  // Initial update
  updateDayOfWeek();
  updateUTCTime();

  // Set up interval to update time every millisecond
  setInterval(updateUTCTime, 1);
});
