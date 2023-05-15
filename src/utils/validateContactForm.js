export const validateContactForm=(values)=>{
    const errors={};
    //////////First Name/////////
    if(!values.firstName){
        errors.firstName='Rquired';
    }
    else if(values.firstName.length<2){
        errors.firstName='Must be at least 2 characters.';
    }
    else if(values.firstName.length>15){
        errors.firstName='Must be 15 characters or less';
    }
    //////////Last Name/////////
    if(!values.lastName){
        errors.lastName='Rquired';
    }
    else if(values.lastName.length<2){
        errors.lastName='Must be at least 2 characters.';
    }
    else if(values.lastName.length>15){
        errors.lastName='Must be 15 characters or less';
    }
    //////////Phone Number/////////
    const reg =/^\d+$/;
    if(!reg.test(values.phoneNum)) {
        errors.phoneNum='The phone number should contain only numbers.';
    }
    else if(values.phoneNum.length<10 || values.phoneNum.length>10){
        errors.phoneNum='The phone number has an area code and 7 numbers.';
    }
    //////////Email//////////
    // Regualr command for email vaildation 
    //const a =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.email.match('@')) {
        errors.email='Email should contains a @'
    }
    else if(!values.email.match('com')) {
        errors.email='Email should also contains .com'
    }
    return errors;
};
