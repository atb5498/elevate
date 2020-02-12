const mapIcon = $("#map-icon");
const shareIcon = $("#share-icon");

const urlParams = new URLSearchParams(window.location.search);
const githubUsername = urlParams.get("name");

// Initializes tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Requests github information and appends it to portfolio page
let githubURL = "https://api.github.com/users/" + githubUsername;

$.ajax({
    url: githubURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    $("#name").text(response.name);
    $("#company").text(response.company);
    $("#email").attr("data-original-title", response.email);
    $("#location").attr("data-original-title", response.location);
    $("#github").attr("data-original-title", response.login);
    $("#github").attr("href", response.html_url);
    $("#bio").text(response.bio);
    $("#avatar").attr("src", response.avatar_url);
});

// Copies url to clipboard
shareIcon.on("click", function (event) {
    event.preventDefault();
    copyUrl();
    setTimeout(function () {
        location.reload();
    }, 1000)
})

function copyUrl() {
    let urlHolder = $("<input>"),
        text = window.location.href;

    $("body").append(urlHolder);
    urlHolder.val(text);
    urlHolder.select();
    document.execCommand("copy");
    urlHolder.remove();
}