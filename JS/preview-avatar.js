const avatarInput = document.getElementById('avatar');
const uploadAvatarButton = document.getElementById('upload-image-button');
const avatarPreview = document.getElementById('avatar-preview');

avatarInput.addEventListener('change', () => {
    const selectedImage = avatarInput.files[0];
    if (selectedImage && selectedImage.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(selectedImage);
        avatarPreview.src = imageUrl;
    }
});

uploadAvatarButton.addEventListener('click', () => {
    avatarInput.click();
});
