const handleError = (err) => {
    let isCampEmpty = false;
    let isAlreadyUsed = false;
    
    switch (err.response.data.error) {
    case 'username-not-unique':
        isAlreadyUsed = true;
        break;
    default :
        isCampEmpty = true;
        break;
    }
    return {isAlreadyUsed, isCampEmpty};
}

const validationUserInfo = (value) => {
    if( value.name === '' || value.username === '' || value.password === '') {
        return 'This camp is empty'
    } else {
        return null;
    }
}

const handleArmyCreation = (maxGold) => {
    switch (maxGold) {
        case 'newArmy':
            return {
                soldiers: [],
                maxGold: 400
            }
        break;

        default:
            return {
                soldiers: []
            }
        break;
    }
    
}

export default {handleError, validationUserInfo, handleArmyCreation};