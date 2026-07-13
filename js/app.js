window.onload = function () {
  renderCalendar();

  const editId = localStorage.getItem("editAppointmentId");

  if (editId) {
    const appointment = getAppointments().find((item) => item.id == editId);

    if (appointment) {
      openModal(appointment);
    }

    localStorage.removeItem("editAppointmentId");
  }
};
