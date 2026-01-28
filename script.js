function showAlert(){
alert("alert Message")

}

function toggleAbout() {
    const about = document.getElementById("aboutMe");

    if (about.style.display === "none" || about.style.display === "") {
        about.style.display = "flex";
    } else {
        about.style.display = "none";
    }
}
