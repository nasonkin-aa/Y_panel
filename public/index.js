const onBtn = document.querySelector('#on-btn');
const offBtn = document.querySelector('#off-btn');

// onBtn.addEventListener('click', () => {
//     fetch('/api/projector', {
//         method: 'POST',
//         body: {
//             method: 'on',
//             ip: 'localhost',
//         }
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// })
// offBtn.addEventListener('click', () => {
//     fetch('/api/projector', {
//         method: 'POST',
//         body: {
//             method: 'off',
//             ip: 'localhost',
//         }
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// })

const onProjector = (id) => {
    fetch('/api/projector', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            command: 'on',
            id,
        })
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const offProjector = (id) => {
    fetch('/api/projector', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            command: 'off',
            id,
        })
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
