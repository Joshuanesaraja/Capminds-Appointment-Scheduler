let currentDate = new Date();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function renderCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  document.getElementById("monthYear").textContent = currentDate.toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric",
    },
  );

  weekDays.forEach((day) => {
    const head = document.createElement("div");
    head.className = "day-header";
    head.textContent = day;
    calendar.appendChild(head);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const appointments = getAppointments();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "day empty";
    calendar.appendChild(empty);
  }

  for (let d = 1; d <= totalDays; d++) {
    const cell = document.createElement("div");
    cell.className = "day";

    if (
      today.getDate() === d &&
      today.getMonth() === month &&
      today.getFullYear() === year
    ) {
      cell.classList.add("today");
    }

    cell.innerHTML = `<div class="day-number">${d}</div>`;

    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

    const dayAppointments = appointments.filter((a) => a.date === dateString);

    dayAppointments.forEach((item) => {
      const card = document.createElement("div");

      card.className = "appointment";

      card.innerHTML = `
<div class="appointment-name">${item.patient}</div>
<div class="appointment-doctor">Dr. ${item.doctor}</div>
<div class="appointment-time">${formatTime(item.time)}</div>
<div class="appointment-actions">
<button type="button" onclick="editAppointment(${item.id})"><i class="fa-regular fa-pen-to-square"></i></button>
<button type="button" onclick="removeAppointment(${item.id})"><i class="fa-solid fa-trash"></i></button>
</div>
`;

      cell.appendChild(card);
    });

    calendar.appendChild(cell);
  }
}

document.getElementById("prevBtn").onclick = function () {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

document.getElementById("nextBtn").onclick = function () {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

document.getElementById("todayBtn").onclick = function () {
  currentDate = new Date();
  renderCalendar();
};

function editAppointment(id) {
  const appointment = getAppointments().find((item) => item.id === id);

  if (!appointment) {
    return;
  }

  openModal(appointment);
}

function removeAppointment(id) {
  if (!confirm("Delete this appointment?")) {
    return;
  }

  deleteAppointment(id);

  renderCalendar();
}
