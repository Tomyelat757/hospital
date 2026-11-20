document.addEventListener('DOMContentLoaded', function() {

    // Récupère mon bouton de soumission
    const submitPatientButton = document.getElementById('submitPatient');

    // Récupère le composant de la liste des patients
    const patientsList = document.getElementById('patientsList');

    submitPatientButton.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre par défaut
        const patientName = document.getElementById('patientName').value;
        const patientFirstName = document.getElementById('patientFirstName').value;
        const patientBirthDate = document.getElementById('patientBirthDate').value;
        const patientSexe = document.getElementById('patientSexe').value;
        const patientPhone = document.getElementById('patientPhone').value;
        const patientAddress = document.getElementById('patientAddress').value;
        const patientReason = document.getElementById('patientReason').value;

        // Ajoute le patient à la liste
        const patientRow = document.createElement('tr');
        patientRow.innerHTML = `
            <td>${patientName}</td>
            <td>${patientFirstName}</td>
            <td>${patientBirthDate}</td>
            <td>${patientSexe}</td>
            <td>${patientPhone}</td>
            <td>${patientAddress}</td>
            <td>${patientReason}</td>
        `;
        patientsList.appendChild(patientRow);

        // Réinitialise le formulaire après l'ajout
        document.getElementById('patientForm').reset();

    });
});