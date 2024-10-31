const username = 'coalition';
const password = 'skills-test';
const token = btoa(`${username}:${password}`);

fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${token}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status); 
    }
    return response.json(); 
})
.then(data => {
    console.log(data); 
    const jessica = data.find(patient => patient.name === 'Emily Williams');
    
    if (jessica) {
        document.getElementById('patient-date_of_birth').innerText = jessica.date_of_birth || 'undefined';
        document.getElementById('patient-gender').innerText = jessica.gender || 'Nombre no disponible';
        
        document.getElementById('patient-name').innerText = jessica.name || 'Nombre no disponible';
        document.getElementById('patient-age').innerText = jessica.age || 'Edad no disponible';
        document.getElementById('patient-phone').innerText = jessica.phone_number || 'Número de teléfono no disponible';
        document.getElementById('patient-emergency').innerText = jessica.emergency_contact || 'Contacto de emergencia no disponible';
        document.getElementById('patient-insurance').innerText = jessica.insurance_type || 'Tipo de seguro no disponible';
    } else {
        console.log('Paciente no encontrado.');
        document.getElementById('patient-name').innerText = 'Paciente no encontrado.';
        document.getElementById('patient-age').innerText = 'Edad no disponible.';
    }
})
.catch(error => {
    console.error('Error:', error); 
});
