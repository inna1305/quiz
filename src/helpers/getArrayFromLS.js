export function getArrayFromLS(name) {
    if (!localStorage.getItem(`${name}`)) {
        localStorage.setItem(`${name}`, '[]');
    }
    const array = localStorage.getItem(`${name}`);

    return JSON.parse(array);
}