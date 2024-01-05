let is24HourFormat = true;
  
function updateClock() {
  const now = new Date();
  document.getElementById('day').textContent = now.toLocaleString('fr-FR', {weekday: 'short'}).toUpperCase();
  document.getElementById('date').textContent = now.getDate().toString();
  document.getElementById('month').textContent = now.toLocaleString('fr-FR', {month: 'short'}).toUpperCase();
  document.getElementById('year').textContent = now.getFullYear();
  document.getElementById('time').textContent = now.toLocaleTimeString('en-us', {hour12: !is24HourFormat});
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateClock();
  }
  
  setInterval(updateClock, 1000);
  updateClock();