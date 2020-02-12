$("#login-btn").on("click", function (event) {
  event.preventDefault();

  let githubUsername = $("#login-input").val().trim();

  window.location.href = "portfolio.html?name=" + githubUsername;
})