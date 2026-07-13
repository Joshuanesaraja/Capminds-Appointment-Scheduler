const modal = document.getElementById("appointmentModal");
const form = document.getElementById("appointmentForm");

let editId = null;

document.getElementById("bookBtn").onclick = function () {
  openModal();
};

document.getElementById("closeModal").onclick = closeModal;
document.getElementById("cancelBtn").onclick = closeModal;

function openModal(data = null) {
  form.reset();

  document.querySelectorAll(".error").forEach((item) => {
    item.classList.remove("error");
  });

  if (data) {
    editId = data.id;

    document.getElementById("patientName").value = data.patient;
    document.getElementById("doctorName").value = data.doctor;
    document.getElementById("hospitalName").value = data.hospital;
    document.getElementById("specialty").value = data.specialty;
    document.getElementById("appointmentDate").value = data.date;
    document.getElementById("appointmentTime").value = data.time;
    document.getElementById("reason").value = data.reason;
  } else {
    editId = null;
  }

  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");

  form.reset();
}

window.onclick = function (e) {
  if (e.target === modal) {
    closeModal();
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validateForm()) return;

  const appointment = {
    id: editId || generateId(),

    patient: patientName.value.trim(),

    doctor: doctorName.value.trim(),

    hospital: hospitalName.value.trim(),

    specialty: specialty.value.trim(),

    date: appointmentDate.value,

    time: appointmentTime.value,

    reason: reason.value.trim(),
  };

  if (editId) {
    updateAppointment(appointment);
  } else {
    addAppointment(appointment);
  }

  closeModal();

  renderCalendar();
});
