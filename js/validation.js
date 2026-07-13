function validateForm() {
  const patient = document.getElementById("patientName");
  const doctor = document.getElementById("doctorName");
  const hospital = document.getElementById("hospitalName");
  const specialty = document.getElementById("specialty");
  const date = document.getElementById("appointmentDate");
  const time = document.getElementById("appointmentTime");
  const reason = document.getElementById("reason");

  const nameRegex = /^[A-Za-z ]+$/;

  const fields = [patient, doctor, hospital, specialty, date, time, reason];

  fields.forEach((field) => field.classList.remove("error"));

  if (patient.value.trim() === "") {
    alert("Patient Name is required.");
    patient.focus();
    patient.classList.add("error");
    return false;
  }

  if (!nameRegex.test(patient.value.trim())) {
    alert("Patient Name should contain only letters.");
    patient.focus();
    patient.classList.add("error");
    return false;
  }

  if (doctor.value.trim() === "") {
    alert("Doctor Name is required.");
    doctor.focus();
    doctor.classList.add("error");
    return false;
  }

  if (!nameRegex.test(doctor.value.trim())) {
    alert("Doctor Name should contain only letters.");
    doctor.focus();
    doctor.classList.add("error");
    return false;
  }

  if (hospital.value.trim() === "") {
    alert("Hospital Name is required.");
    hospital.focus();
    hospital.classList.add("error");
    return false;
  }

  if (!nameRegex.test(hospital.value.trim())) {
    alert("Hospital Name should contain only letters.");
    hospital.focus();
    hospital.classList.add("error");
    return false;
  }

  if (specialty.value.trim() === "") {
    alert("Specialty is required.");
    specialty.focus();
    specialty.classList.add("error");
    return false;
  }

  if (!nameRegex.test(specialty.value.trim())) {
    alert("Specialty should contain only letters.");
    specialty.focus();
    specialty.classList.add("error");
    return false;
  }

  if (date.value === "") {
    alert("Please select a date.");
    date.focus();
    date.classList.add("error");
    return false;
  }

  if (time.value === "") {
    alert("Please select a time.");
    time.focus();
    time.classList.add("error");
    return false;
  }

  if (reason.value.trim() === "") {
    alert("Reason is required.");
    reason.focus();
    reason.classList.add("error");
    return false;
  }

  return true;
}
