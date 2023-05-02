import {getArrayFromLS} from "./getArrayFromLS";

export const setValueToLS = (keyName, data) => {
    const userResponses = getArrayFromLS('responses');
    userResponses.push(data);
    localStorage.setItem('responses', JSON.stringify(userResponses));
};