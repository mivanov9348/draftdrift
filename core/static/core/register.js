document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-password');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-target');
            const passwordField = document.getElementById(targetId);

            if (passwordField) {
                const currentType = passwordField.getAttribute('type');
                const newType = currentType === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', newType);

                button.textContent = newType === 'password' ? 'Show' : 'Hide';
            }
        });
    });
});
