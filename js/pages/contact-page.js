document.addEventListener('DOMContentLoaded', function () {

    fieldsId = ['prenom', 'nom', 'email', 'message'];

    fieldsId.forEach(fieldId => { // for each field id of the array
        const input = document.getElementById(fieldId); // get the input element by id
        input.addEventListener("input", function () {
            const associatedLabel = document.querySelector(`label[for="${this.id}"]`); // get the label associated with the input
            if (associatedLabel) { // if the label exists
                if (this.value == "") { // if the input is empty
                    associatedLabel.classList.add('hidden');
                    this.placeholder = associatedLabel.textContent; // put the label text in the placeholder
                } else { // if the input is not empty
                    associatedLabel.classList.remove('hidden');
                    this.placeholder = ""; // Remove the placeholder since label is now displayed
                }
            }
        });
    });

});

