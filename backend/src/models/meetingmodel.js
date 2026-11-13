import {Schema,model} from "mongoose";;

const meeting=new Schema({
    user_id:{type:String, required:true},
    meeting_id:{type:String,reuired:true},
    date:{type:Date,default:Date.now(),required:true},
});

const Meet=new model("Meet",meeting);
export {Meet};
