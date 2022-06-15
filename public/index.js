const list = document.querySelector('.eqs__list');

const getEqs = async () => {
    try {
        const response = await axios.get('/api/getEq');
        console.log(response);
        if (!response) return;

        const { data: { eqs } } = response;

        const groupedEqs = groupByNumber(eqs);
        for (const num in groupedEqs) { 
            addRow(groupedEqs[num]);
        }
    } catch (error) {
        console.error(error);
    }
}

const groupByNumber = (arr) => {
    return arr.reduce((prev, curr) => {
        const num = curr.number.trim();
        (prev[num] = prev[num] || []).push(curr);

        return prev;
    }, {})
}

const addRow = (group) => {
    if (group.length == 1) {
        let row = list.appendChild(document.createElement('div'));
        row.classList.add('table__row');

        row.appendChild(document.createElement('div')).innerHTML =  group[0].number;
        row.appendChild(document.createElement('div')).innerHTML = group[0].name;
        row.appendChild(document.createElement('div')).innerHTML = group[0].ip;

        let btn = row.appendChild(document.createElement('button'));
        btn.innerHTML = group[0].number;
        btn.classList.add('btn__green');
        btn.addEventListener('click', () => changeStatus(btn, group));
    } else {
        let details = list.appendChild(document.createElement('details'));
        details.classList.add('details')

        let summary = details.appendChild(document.createElement('summary'));
        summary.classList.add('details__summary');
        summary.classList.add('table__row');
        summary.innerHTML = group[0].number;

        let detailsContent = details.appendChild(document.createElement('div'));
        detailsContent.classList.add('details__content');

        group.forEach(el => {
            addRow([el]);
        });
    }
}

const changeStatus = async (btn, group) => {

    console.log('click', group);
    if (btn.classList.value === "btn__green") {
        btn.classList.remove('btn__green')
        btn.classList.add('btn__red')
    } else {
        btn.classList.remove('btn__red')
        btn.classList.add('btn__green')
    }
}

window.onload = () => {
    getEqs()
}