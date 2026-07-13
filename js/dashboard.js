let appointments = [];

function loadAppointments() {
  appointments = getAppointments();

  renderTable(appointments);
}

function renderTable(data) {
  const tbody = document.getElementById("appointmentTable");

  tbody.innerHTML = "";

  if (data.length === 0) {
    tbody.innerHTML = "<tr><td colspan='7'>No Appointments Found</td></tr>";

    return;
  }

  data.forEach((item) => {
    tbody.innerHTML += `
<tr>

<td>${item.patient}</td>

<td>${item.doctor}</td>

<td>${item.hospital}</td>

<td>${item.specialty}</td>

<td>${formatDate(item.date)}</td>

<td>${formatTime(item.time)}</td>

<td>

<button class="action-btn edit-btn" onclick="editAppointment(${item.id})">Edit</button>

<button class="action-btn delete-btn" onclick="deleteRow(${item.id})">Delete</button>

</td>

</tr>
`;
  });
}

function deleteRow(id) {
  if (!confirm("Delete Appointment?")) {
    return;
  }

  deleteAppointment(id);

  loadAppointments();
}

function editAppointment(id) {
  localStorage.setItem("editAppointmentId", id);

  window.location.href = "index.html";
}

function searchAppointments() {
  const patient = patientSearch.value.toLowerCase();

  const doctor = doctorSearch.value.toLowerCase();

  const from = fromDate.value;

  const to = toDate.value;

  const filtered = appointments.filter((item) => {
    const patientMatch = item.patient.toLowerCase().includes(patient);

    const doctorMatch = item.doctor.toLowerCase().includes(doctor);

    let dateMatch = true;

    if (from) {
      dateMatch = item.date >= from;
    }

    if (to) {
      dateMatch = dateMatch && item.date <= to;
    }

    return patientMatch && doctorMatch && dateMatch;
  });

  renderTable(filtered);
}

filterBtn.onclick = searchAppointments;

patientSearch.onkeyup = searchAppointments;

doctorSearch.onkeyup = searchAppointments;

fromDate.onchange = searchAppointments;

toDate.onchange = searchAppointments;

loadAppointments();
