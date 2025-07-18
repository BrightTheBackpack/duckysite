
// const input = document.getElementById('fileinput');

// const upload = async (file) => {
//   const formData = new FormData();
//   formData.append('file', file); // Adjust 'file' if the API expects a different field name
//     const dataURL = await fileToDataURL(file);

//   try {
//     const response = await fetch('https://cdn.hackclub.com/api/v3/new', {
//       method: 'POST',
//       headers: {
//         'Authorization': 'Bearer beans'
//       },
//       body: JSON.stringify([dataURL]) // assuming API accepts an array of strings
//     });

//     const result = await response.json();
//     console.log('Upload successful:', result);
//   } catch (error) {
//     console.error('Upload failed:', error);
//   }
// };



// const onSelectFile = () => {
//     console.log('uploading')
//     console.log(input.files[0]);
//     upload(input.files[0]);
    
// };
// const fileToDataURL = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result); // reader.result is the data URL
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// };

// input.addEventListener('change', onSelectFile, false);



