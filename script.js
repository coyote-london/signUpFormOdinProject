function onChange() {
    const password = document.querySelector('input[name=passwordInput]');
    const confirm = document.querySelector('input[name=passwordConfirm]');
    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    }
    else confirm.setCustomValidity('Passwords do not match...');
}