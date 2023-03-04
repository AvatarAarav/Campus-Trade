function showImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = document.getElementById('profile-photo');
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}