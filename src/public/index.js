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

const onProjector = (ip) => {
    fetch('/api/projector', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            method: 'on',
            ip,
        })
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

const offProjector = (ip) => {
    fetch('/api/projector', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            method: 'off',
            ip,
        })
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
