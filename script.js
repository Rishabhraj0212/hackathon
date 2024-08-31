// Initialize the time slots and doctors
const slots = [
    '10:00', '10:30', '11:00', '11:30', '12:00',
    '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00',
    '17:30', '18:00', '18:30'
];

const doctors = {
    'Doctor 1': true,
    'Doctor 2': true
};

const bookings = {
    'Clinic': {},
    'Doctor 1': {},
    'Doctor 2': {}
};

slots.forEach(slot => {
    bookings['Clinic'][slot] = true;
    bookings['Doctor 1'][slot] = true;
    bookings['Doctor 2'][slot] = true;
});

function isSlotAvailable(slot, type, doctor) {
    if (type === 'Clinic') {
        return bookings['Clinic'][slot];
    } else if (type === 'Doctor') {
        return bookings[doctor][slot];
    }
    return false;
}

function bookSlot(slot, type, doctor) {
    if (isSlotAvailable(slot, type, doctor)) {
        if (type === 'Clinic') {
            bookings['Clinic'][slot] = false;
            for (let doc in doctors) {
                if (doc !== 'Clinic' && bookings[doc][slot]) {
                    bookings[doc][slot] = false;
                    break;
                }
            }
        } else if (type === 'Doctor') {
            bookings[doctor][slot] = false;
        }
        localStorage.setItem('selectedSlot', slot);
        alert(`Slot ${slot} successfully booked for ${type}`);
    } else {
        alert(`Slot ${slot} is not available for ${type}`);
    }
}

function setupBookingPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const title = document.getElementById('bookingTypeTitle');
    title.textContent = `Book a ${type} Appointment`;

    const slotGrid = document.getElementById('slotGrid');
    slots.forEach((time) => {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'slot';
        slotDiv.textContent = time;
        slotDiv.addEventListener('click', () => selectSlot(time));
        slotGrid.appendChild(slotDiv);
    });

    document.getElementById('bookButton').addEventListener('click', () => {
        const selectedSlot = document.querySelector('.slot.selected');
        if (selectedSlot) {
            const slotTime = selectedSlot.textContent;
            bookSlot(slotTime, type, type.includes('Doctor') ? type : null);
            window.location.href = 'index.html';
        } else {
            alert('Please select a slot first.');
        }
    });
}

function selectSlot(time) {
    document.querySelectorAll('.slot').forEach(slot => slot.classList.remove('selected'));
    document.querySelector(`.slot:nth-child(${slots.indexOf(time) + 1})`).classList.add('selected');
}

document.getElementById('bookClinicBtn')?.addEventListener('click', () => {
    window.location.href = 'book.html?type=Clinic';
});
document.getElementById('bookDoctor1Btn')?.addEventListener('click', () => {
    window.location.href = 'book.html?type=Doctor 1';
});
document.getElementById('bookDoctor2Btn')?.addEventListener('click', () => {
    window.location.href = 'book.html?type=Doctor 2';
});

if (document.getElementById('slotGrid')) {
    setupBookingPage();
}
