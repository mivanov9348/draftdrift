document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordButton = document.getElementById('toggle-password');
    const passwordField = document.querySelector('input[name="password"]');

    if (togglePasswordButton && passwordField) {
        togglePasswordButton.addEventListener('click', function () {
            const currentType = passwordField.getAttribute('type');
            const newType = currentType === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', newType);

            togglePasswordButton.textContent = newType === 'password' ? 'Show' : 'Hide';
        });
    }
});
