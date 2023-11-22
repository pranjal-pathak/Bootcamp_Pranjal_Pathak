document.addEventListener("DOMContentLoaded", () => {
  const toggleSection = (sectionId) => {
    const sectionContent = document.getElementById(sectionId);
    sectionContent.style.display =
      sectionContent.style.display === "none" ||
      sectionContent.style.display === ""
        ? "block"
        : "none";
  };

  // Attach click event listeners to collapsible sections
  const collapsibleSections = document.querySelectorAll(".collapsible-section");
  collapsibleSections.forEach((section) => {
    section.addEventListener("click", () => {
      const contentId = section.dataset.contentId;
      toggleSection(contentId);
    });
  });
});
