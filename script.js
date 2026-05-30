const leadForm = document.querySelector(".lead-form");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const status = leadForm.querySelector(".form-status");
    const formData = new FormData(leadForm);
    const name = String(formData.get("name") || "").trim();

    status.textContent = name
      ? `${name}, הפרטים נקלטו בדף המקומי. נעדכן אותך כשנפתחת גישה מוקדמת.`
      : "הפרטים נקלטו בדף המקומי. נעדכן אותך כשנפתחת גישה מוקדמת.";

    leadForm.reset();
  });
}
