const input = document.querySelector("[data-input]");
const preview = document.querySelector("[data-preview]");
const submitButton = document.querySelector("[data-]");

input.addEventListener("change", saveImage);

function saveImage() {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    const file = input.files[0];

    reader.onload = event => {
      preview.setAttribute("src", event.target.result);
    };

    reader.readAsDataURL(file);

    // Create a root reference
    const storageRef = firebase.storage().ref();
    alert("storageRef", storageRef);
    ref
      .put(file)
      .then(function(snapshot) {
        alert("uploaded a blob or file");
      })
      .catch(function(error) {
        alert("error", error);
      });

    fetch("http://www.example.net", {
      method: "POST",
      body: file
    }).then(response => response.json());
  }
}
