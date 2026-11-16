function updateDateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const date = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric"
  });

  let dateTime = `${time} ${date}`;
  document.getElementById("dateTime").textContent = dateTime;

}
updateDateTime();

setInterval(updateDateTime, 1000);
