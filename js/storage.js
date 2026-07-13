const STORAGE_KEY = "appointments";

function getAppointments() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAppointments(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function addAppointment(appointment) {
  const appointments = getAppointments();
  appointments.push(appointment);
  saveAppointments(appointments);
}

function updateAppointment(updated) {
  const appointments = getAppointments().map((item) => {
    return item.id === updated.id ? updated : item;
  });
  saveAppointments(appointments);
}

function deleteAppointment(id) {
  const appointments = getAppointments().filter((item) => item.id !== id);
  saveAppointments(appointments);
}
