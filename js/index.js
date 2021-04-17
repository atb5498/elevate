$("#search-btn").on("click", function (event) {
  event.preventDefault();

  let githubUsername = $("#search-input").val().trim();

  window.location.href = "profile.html?name=" + githubUsername;
})