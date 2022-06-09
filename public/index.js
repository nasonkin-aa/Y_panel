const listEl = document.querySelector('.eqs__list');

const getEqs = async () => {
    try {
        const response = await axios.get('/api/getEq');

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

const addRow = (group) => {
    if (group.length == 1) {
        const row = listEl.appendChild(document.createElement('div'));
        row.innerHTML = group[0].number;
    } else {
        const row = listEl.appendChild(document.createElement('details'));
        const summary = row.appendChild(document.createElement('summary'));
        summary.innerHTML = group[0].number;

        group.forEach(el => {
            const subItem = row.appendChild(document.createElement('div'));
            subItem.innerHTML = el.name;
        });
    }
}

const groupByNumber = (arr) => {
    return arr.reduce((prev, curr) => {
        const num = curr.number.trim();
        (prev[num] = prev[num] || []).push(curr);

        return prev;
    }, {})
}

window.onload = () => {
    getEqs()
}