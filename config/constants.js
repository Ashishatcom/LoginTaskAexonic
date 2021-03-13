require('dotenv').config(); 

let DB 		= null;
let ENV 	= null;
let PORT 	= null;

ENV = process.env.NODE_ENV;

if( ENV === 'development' ) {
	
	DB 		= process.env.DEV_MONGODB_URI;
	PORT 	= process.env.DEVPORT;

} else if( ENV === 'production' ) {
	
	DB 		= process.env.PROD_MONGODB_URI;
	PORT 	= process.env.PRODPORT;

} 

const STATUMESSAGE = {
	EMAIL_EXIST:"EMAIL_ALREDY_EXIST",
	NOT_FOUND:"USER_NOT_FOUND",
	PASSWORD_NOT_MATCH:"PASSWORD_NOT_MATCH",
	DATA_NOT_SAVE : "DATA_NOT_SAVE",
	DATA_UPDATED: "DATA_UPDATED",
	SOMETHING_WRONG_HAPPEN_PLEASE_TRY_ONCE_AGAIN:"SOMETHING_WRONG_HAPPEN_PLEASE_TRY_ONCE_AGAIN",
    YOU_HAVE_REACHED_MAX_LIMIT:"YOU_HAVE_REACHED_MAX_LIMIT"
}

module.exports = {
	MONGO_URI : DB,
	PORT,
	STATUMESSAGE		
}