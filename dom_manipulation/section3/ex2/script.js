function changeTab(tabId) {
  // Hide all tab contents
  var tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(function (content) {
    content.classList.remove("show");
  });

  // Show the selected tab content
  var selectedTabContent = document.getElementById(tabId);
  selectedTabContent.classList.add("show");
}
