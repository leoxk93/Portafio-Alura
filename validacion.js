//Haz tú validación en javascript acá

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameField = form.querySelector('input[type="text"]');
    const emailField = form.querySelector('input[type="email"]');
    const messageField = form.querySelector('textarea');
    
    form.addEventListener('submit', function(event) {
        // Evita el envío del formulario si hay errores
        event.preventDefault();
        
        // Reinicia los mensajes de error
        clearErrors();

        // Validación de los campos
        let isValid = true;
        
        if (!nameField.value.trim()) {
            showError(nameField, 'El nombre es obligatorio.');
            isValid = false;
        }

        if (!emailField.value.trim()) {
            showError(emailField, 'El correo es obligatorio.');
            isValid = false;
        } else if (!isValidEmail(emailField.value.trim())) {
            showError(emailField, 'El correo no es válido.');
            isValid = false;
        }

        if (!messageField.value.trim()) {
            showError(messageField, 'El mensaje es obligatorio.');
            isValid = false;
        }

        // Si es válido, permite el envío del formulario
        if (isValid) {
            form.submit();
        }
    });

    function showError(field, message) {
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    function clearErrors() {
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(function(message) {
            message.remove();
        });
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
