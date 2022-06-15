elements = {
    'Viewboard-Next': document.getElementById('Viewboard-Next'),
    'Viewboard-Text': document.getElementById('Viewboard-Text'),
    'Viewboard-Name' : document.getElementById('Viewboard-id')
}

async function query_post(){
    const response = await fetch('/viewboard/new-post', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers : {
            'Content-Type': 'application/json'
        }
    })
    const message = await response.json();
    elements['Viewboard-Text'].textContent = message.message;
    elements['Viewboard-Name'].textContent = '-' + message.identifer;
    
}

elements['Viewboard-Next'].addEventListener('click', query_post);