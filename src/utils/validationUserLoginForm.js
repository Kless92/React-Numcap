export const validateUserLoginForm = (value) => {
    const error={};

    if(!value.username){
        error.username='Required';
    }
    else if(value.username.length<6){
        error.username='Must be more then 6.';
    }    
    else if(value.username.length>15){
        error.username='Must be less then 15.';
    }
    if(!value.password){
        error.password='Required';
    }
    else if(value.password.length<8){
        error.password='Must contain 8 or more characters.';
    }
    return error;
};