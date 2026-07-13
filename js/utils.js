function generateId() {
  return Date.now();
}

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-GB");
}

function formatTime(time) {
  const [h, m] = time.split(":");
  let hour = parseInt(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${m} ${ampm}`;
}
