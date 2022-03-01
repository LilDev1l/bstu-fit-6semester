function add() {
    const form = document.querySelector('#form-add');
    const fd = new FormData(form);

    fetch('/contacts/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function update() {
    const form = document.querySelector('#form-update');
    const fd = new FormData(form);

    fetch(`/contacts/update/${fd.get('id')}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fullName: fd.get('fullName'),
            phoneNumber: fd.get('phoneNumber')
        })
    })
        .then(() => window.location.href = '/contacts');
}

function deleteOne() {
    const form = document.querySelector('#form-update');
    const fd = new FormData(form);

    fetch(`/contacts/delete/${fd.get('id')}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
        .then(() => window.location.href = '/contacts');
}


