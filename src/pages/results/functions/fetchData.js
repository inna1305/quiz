import getRequestBody from "./getRequestBody";
import clearElement from "../../../helpers/clearElement";
import resultsPage from "../resultsPage";
import {resetForm} from "../../../components/getContactForm";

const fetchData = () => {

    const headers = new Headers();
    headers.append('accept', '*/*');
    headers.append('Content-Type', 'application/json');
    const requestBody = getRequestBody();

    fetch('https://gothic-calling-389914.uc.r.appspot.com/surveys', {
        //https://gothic-calling-389914.uc.r.appspot.com/swagger-ui/index.html
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: headers
    })
        .then(response => {
            return response.json();
        }).then(data => {
        const body = document.querySelector('body');
        clearElement(body);
        body.append(resultsPage(data));
        resetForm();
    })
        .catch(error => {
            console.log(error + 'it`s error!');
        });
}

export default fetchData;
