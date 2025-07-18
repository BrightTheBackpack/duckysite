//https://duckysite.vercel.app/

const list = document.getElementById('duckylist');

fetch('https://duckysite.vercel.app/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(const ducky of data) {
            const duckyElement = document.createElement('div');
            duckyElement.style.cssText = `
            display:flex;
            `
            duckyElement.className = 'ducky';
            duckyElement.innerHTML = `
                <img src="${ducky.img}" alt="${ducky.description}" width="200">
                <div style="margin-left: 20px;">
                <h2>${ducky.description}</h2>
                <p>Found? ${ducky.status ? "Yes" : "No" }</p>

                </div>
            `;
            list.appendChild(duckyElement);
        }

    }); 