
// axios.get("https://gorest.co.in/public/v2/users", )
const axios = require('axios')
const users = [];
let Male=0;
let Female=0;
let MaleActive=0;
let FemaleActive=0;
let MaleInactive = 0;
let FemaleInactive=0;
const MaleFemaleDetails = {male:[], female:[]};
const fetchUsers = async () => {
    // use axios to fetch user
    await axios
    // get fucntion for fetching -> returns a promise
      .get('https://gorest.co.in/public/v2/users')
      .then(response => {
        for(const data of response.data){
            users.push(data);
        }
        for(const user of users){
            if(user['gender']=="male"){
                // male+=1
                Male++;
                if(user['status']=="active"){
                    MaleActive++;
                }else{
                    MaleInactive++;
                }
            }else{
                // female+=1
                Female++;
                if(user['status']=="active"){
                    FemaleActive++;
                }else{
                    FemaleInactive++;
                }
            }
        }
      })
      .catch(error => 
        // if error console error
        console.error(error)
    )

    // Set Male Details
    MaleFemaleDetails.male.count =  Male;
    MaleFemaleDetails.male.active = MaleActive;
    MaleFemaleDetails.male.inactive = MaleInactive;

    // Set Female Details
    MaleFemaleDetails.female.count =  Female;
    MaleFemaleDetails.female.active = FemaleActive;
    MaleFemaleDetails.female.inactive = FemaleInactive;


    // print all details
    console.log(`Total Male = ${Male}`);
    console.log(`Total Male Whose Status is Active = ${MaleActive}`);
    console.log(`Total Male Whose status is InActive = ${MaleInactive}`);
    console.log(`Total FeMale = ${Female}`);
    console.log(`Total Female Whose Status is Active = ${FemaleActive}`);
    console.log(`Total Female whose status is Inactive = ${FemaleInactive}`);

    // return Male Female Details
    return MaleFemaleDetails;
  }
  
// fetch users and log details
fetchUsers().then((response) =>{
    console.log("All Male and Female Details are ");
    console.log(response);

}).catch(error => console.console.log(error));
