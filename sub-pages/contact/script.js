function handleForm() {
    const form = document.getElementById('form');
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    // result.innerHTML = "Please wait..."
                
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            window.location = "success.html";
        } else {
            console.log(response);
            // result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        window.location = "failure.html";
    })
    .then(function() {
        form.reset();
    });
}