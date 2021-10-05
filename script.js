function openModal() {
  let modal = document.getElementById("queroVoltar");

  if (typeof modal == "underfined" || modal === null) return;

  modal.style.display = "Block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  let modal = document.getElementById("queroVoltar");

  if (typeof modal == "underfined" || modal === null) return;

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}