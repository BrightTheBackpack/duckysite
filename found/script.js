const dropdown = document.getElementById('ducks');
const submit = document.getElementById('submit');
const name = document.getElementById('name');
const nulloption = document.createElement('option');
nulloption.value = '';
nulloption.textContent = 'Select a duck';
dropdown.appendChild(nulloption);

fetch('https://duckysite.vercel.app/notfound')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(const id in data) {
            const ducky = data[id];
            console.log(ducky)
            const option = document.createElement('option');
            option.value = id;
            option.textContent = ducky.description;
            dropdown.appendChild(option);
        }
    });

submit.addEventListener('click', () => {
    const id = dropdown.value;
    const duckyName = name.value;

    if (id && duckyName) {
        fetch(`https://duckysite.vercel.app/updatestate?id=${id}&status=true&name=${duckyName}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Duck state updated successfully!');
                } else {
                    alert('Failed to update duck state.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while updating the duck state.');
            });
    } else {
        alert('Please select a duck and enter a name.');
    }
});
