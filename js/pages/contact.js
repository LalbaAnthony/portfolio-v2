document.addEventListener('DOMContentLoaded', function () {

    fieldsId = ['prenom', 'nom', 'email', 'message'];

    fieldsId.forEach(fieldId => { // for each field id of the array
        const input = document.getElementById(fieldId); // get the input element by id
        input.addEventListener("input", function () {
            // ? console.log(this.value);
            // ? console.log(this.id);

            const associatedLabel = document.querySelector(`label[for="${this.id}"]`); // get the label associated with the input
            if (associatedLabel) { // if the label exists
                associatedLabel.style.display = "block"; // Display the label
                this.placeholder = ""; // Remove the placeholder since label is now displayed
            }
        });
    });

});

