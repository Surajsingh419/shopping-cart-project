const admin = require("firebase-admin");
const serviceAccount = require("../blockvier-firebase.json");
const userModel = require("../models/userModel");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const requiresAuth = async (req,res,next) =>{
    const idToken = req.header('FIREBASE_AUTH_TOKEN');
    if(!idToken){
        return next(new AppError('Please pass firebase auth token',400));
    }
    let decodedIdToken;
    try{
        decodedIdToken = await admin.auth().verifyIdToken(idToken,true)
    }catch(error){
        next(error);
        return
    }
    let user = await userModel.findOne({firebaseUid:decodedIdToken.uid});
    if(!user){
        if(req.baseUrl + req.path==="/api/user/onboarding"){
            if(decodedIdToken.firebase.sign_in_provider === "phone"){
                user = await userModel.create({
                    phone_Number:decodedIdToken.phone_Number,
                    firebaseUid:decodedIdToken.uid,
                    firebaseSignInProvider:decodedIdToken.firebase.sign_in_provider
                })
            }else{
                user = await userModel.create({
                    account_type:decodedIdToken.account_type,
                    email:decodedIdToken.email,
                    upload_Verification:decodedIdToken.upload_Verification,
                    firebaseUid:decodedIdToken.uid,
                    firebaseSignInProvider:decodedIdToken.firebase.sign_in_provider
    
                })
            }
        }else{
            return next(new AppError("User not found",404));
        }
        
    }
    req.user = user;
    next();
}
module.exports={requiresAuth}