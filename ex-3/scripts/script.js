document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.input-group__button-submit').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submit action
        let hours = parseInt(document.getElementById('hoursInput').value) || 0;
        let currentDate = new Date();
        let futureDate = new Date(currentDate.getTime() + hours * 60 * 60 * 1000);
        document.getElementById('futureDate').textContent = 'Nous serons le: ' + futureDate.toString();
    });
});
