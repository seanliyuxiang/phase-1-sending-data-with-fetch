// Add your code here

function submitData(userName, userEmail) {
  
  // data payload
  const formData = {
    name: userName,
    email: userEmail
  };

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  };

  return fetch('http://localhost:3000/users', configObj)
  .then(response => response.json())
  .then(json => {
    let h1 = document.createElement('h1');
    h1.innerHTML = json.id;
    document.querySelector('body').appendChild(h1);
  })
  .catch(error => {
    let h2 = document.createElement('h2');
    h2.innerHTML = error.message;
    document.querySelector('body').appendChild(h2);
  });
}
