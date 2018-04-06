const input = document.querySelector('[data-input]');
const preview = document.querySelector('[data-preview]');

input.addEventListener('change', saveImage);

function saveImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = event => {
      preview.setAttribute('src', event.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}