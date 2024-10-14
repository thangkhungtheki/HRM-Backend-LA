

const _user = require("../model/user.model")
const bcrypt = require('bcrypt');

async function docUser(){
    let docs = await _user.find()
    return docs
}



async function find(users){
    let doc = await _user.findOne({username: users})
    
    if(doc.role == 'admin'){
        //console.log(doc)
        return true
    } 
    else {
        return false
    }
}
async function timuservaupdate(username, newPassword) {
  try {
    // Find the user by username
    let user = await _user.findOne({ username: username });
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // Encrypt the new password
    const hashedPassword = await bcrypt.hash(newPassword, bcrypt.genSaltSync(5));

    // Update the password in the database
    user.password = hashedPassword;
    await user.save();

    return { success: true, message: 'Password updated successfully' };
  } catch (err) {
    return { success: false, message: 'Error updating password', error: err };
  }
}





module.exports = {
    docUser,
    find,
    timuservaupdate
}