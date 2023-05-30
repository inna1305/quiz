export function getMapFromLS(name) {
    const mapJson = localStorage.getItem(name);
    if (mapJson === null) {
        return new Map();
    }
    try {
        return new Map(JSON.parse(mapJson));
    } catch (e) {
        console.error(`Error parsing JSON data for ${name}: ${e.message}`);
    }
}