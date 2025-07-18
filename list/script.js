//https://duckysite.vercel.app/

fetch('https://duckysite.vercel.app/')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });