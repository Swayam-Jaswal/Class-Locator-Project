const classMaps = {
    '101': 'floor1_map.png',
    '102': 'floor1_map.png',
    '201': 'floor2_map.png',
};

function findClass() {
    const classNumber = document.getElementById('classNumber').value;
    const mapContainer = document.getElementById('mapContainer');

    if (classMaps[classNumber]) {
        mapContainer.innerHTML = `<img src="${classMaps[classNumber]}" alt="Map for ${classNumber}">`;
        mapContainer.style.display = 'block';
    } else {
        mapContainer.innerHTML = '<p>Class not found. Please enter a valid class number.</p>';
        mapContainer.style.display = 'block';
    }
}
