document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const sections = document.querySelectorAll(".link-section");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    sections.forEach((section) => {
      const cards = section.querySelectorAll(".link-card");
      let matchInSection = false;

      cards.forEach((card) => {
        const name = card.getAttribute("data-name")?.toLowerCase() || "";
        if (name.includes(query)) {
          card.style.display = "flex";
          matchInSection = true;
        } else {
          card.style.display = "none";
        }
      });

      // Show/hide section based on whether any match was found
      section.style.display = matchInSection ? "block" : "none";
    });

    // If query is empty, reset all cards and sections
    if (query === "") {
      sections.forEach((section) => {
        section.style.display = "block";
        section.querySelectorAll(".link-card").forEach((card) => {
          card.style.display = "flex";
        });
      });
    }
  });
});
