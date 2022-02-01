const hideBtn = document.querySelector(".btn-badge-hide");
const hideBadge = document.querySelector(".badge-hide");

hideBtn.addEventListener("click", () => {
  if (hideBadge.style.display === "none")
    hideBadge.style.display = "block";
  else hideBadge.style.display = "none";
});