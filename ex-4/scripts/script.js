let is24HourFormat = true;
  
function updateClock() {
  const now = new Date();
  document.getElementById('day').textContent = now.toLocaleString('en-us', {weekday: 'short'});
  document.getElementById('date').textContent = now.getDate().toString();
  document.getElementById('month').textContent = now.toLocaleString('en-us', {month: 'short'});
  document.getElementById('year').textContent = now.getFullYear();
  document.getElementById('time').textContent = now.toLocaleTimeString('en-us', {hour12: !is24HourFormat});
}

