import {getMapFromLS} from "../../../helpers/getMapFromLS";

const getRequestBody = () => {
    const body = {
        "initiator": "",
        "cities": [],
        "currentEducation": "",
        "educationTargetType": "",
        "learningForm": "",
        "paidEducationAllowedType": "",
        "educationSpecialityType": [],
        "howManyToAdmission": "",
        "name": "",
        "phone": "",
        "email": ""
    }

    let mapFromLS = getMapFromLS('responses');
    const answers = Array.from(mapFromLS.values());
    answers.forEach(answer => {
        if (Object.prototype.hasOwnProperty.call(body, answer.question)) {
            body[answer.question] = answer.value;
        }
    });
    return body;
}

export default getRequestBody;