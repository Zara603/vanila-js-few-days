import "./styles.css";

const tabButtons = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");
const toggleActive = el => {
  const panelName = el.getAttribute("data-tab-target");
  tabContents.forEach(content => content.classList.remove("is-active"));
  document.getElementById(panelName).classList.add("is-active");
  tabButtons.forEach(content => content.classList.remove("is-active"));
  el.classList.add("is-active");
};
tabButtons.forEach(tab =>
  tab.addEventListener("click", () => toggleActive(tab))
);
