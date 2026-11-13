import {Schema,model} from "mongoose";
const username=new Schema({
    name:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    token:{type:String,required:true},
})

const User=new model("User",username);
export {User};
