const {User} = require("/Users/phankieuphu/Documents/JS/NodeJs/Banking/models/user.js");

const checkRegister = (citizendId,username,password) =>{
    // rederence method 
    const id = checkCitizendId(citizendId);
    const user = checkUsername(username);
    const pass = checkPassword(password);


    const error = "";
    // check citizendId
    if(id.status == 200){
        // check status username 
        if(user.status == 200){
            // check status password
            if(pass.status == 200){
                return true;
            }else{
                error = pass.value;
                return error;
            }
        }else{
            error = user.value;
            return error;
        }
    }else{
        error = id.value;
        return error;
    }
}


const checkCitizendId =(citizenId) => {
    // check length
    if(citizenId.length == 9|| citizenId.length == 12){
        const draw = User.finByPk(citizenId);
        if(!draw){
            const status = 200;
            const value = citizenId;
            const resultCitizenId = {
                    status,
                    value,
            }
        }else{
            const status = 500;
            const value = "citized already exists";
            const resultCitizenId = {
                    status,
                    value,
            }
        }
        
    }else{
        const status = 500;
        const value = "citizenId not found";
        const resultCitizenId = {
                status,
                value,
        }
    }
    return resultCitizenId;
}



const checkUsername = (username)=>{
    // check lenght username minimum
    if(username.length >5){
        // check username duplicate with username on database
        const draw = User.finByPk(username);
        if(!draw){
            const status = 200;
            const resultUsername = {
                status,
                username
            }
        }else{        
            const status = 500;
            const value = "Username already exists"
            const resultUsername = {
                status,
                value
            }
        }
    }else{
        const status = 500;
        const value = "Username fail"
        const resultUsername = {
            status,
            value
        }
        
    }
    return resultEmail;
}


const checkPassword = (password) =>{
    // check length password
    if(password.length >6){
        // check
        const status = 200;
        const resultCheckPassword = {
            status,
            password
        }
        
    }else{
        const status = 500;
        const resultCheckPassword = {
            status,
            password,
        }
    }
    return resultCheckPassword;
}


module.exports = {
    checkRegister,
    checkCitizendId,
    checkUsername,
    checkPassword
}