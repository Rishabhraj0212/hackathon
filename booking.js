const slots = [
    '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00',
    '17:30', '18:00', '18:30'
];

function displayAvailableSlots() {
    const slotGrid = document.getElementById('slotGrid');
    slotGrid.innerHTML = ''; // Clear existing slots

    slots.forEach(slot => {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'slot';
        slotDiv.textContent = slot;
        slotDiv.addEventListener('click', () => selectSlot(slot));
        slotGrid.appendChild(slotDiv);
    });
}

function selectSlot(slot) {
    document.querySelectorAll('.slot').forEach(slotDiv => slotDiv.classList.remove('selected'));
    document.querySelector(`.slot:nth-child(${slots.indexOf(slot) + 1})`).classList.add('selected');
}

document.getElementById('bookButton').addEventListener('click', () => {
    const selectedSlot = document.querySelector('.slot.selected');
    if (selectedSlot) {
        const slotTime = selectedSlot.textContent;
        localStorage.setItem('selectedSlot', slotTime); // Save selected slot to local storage
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Please select a slot first.');
    }
});

// Display available slots on page load
displayAvailableSlots();
