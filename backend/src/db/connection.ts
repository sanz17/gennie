import {connect, disconnect} from "mongoose";
async function connectDatabase(){
    try{
        await connect(process.env.MONGODB_URL);
    }
    catch(error){
        console.log(error);
        throw new Error("Cannot connect to the string")
    }
}

async function disconnectDatabase() {
    try{
        await disconnect();

    }
    catch(error)
    {
        console.log(error);
        throw new Error("Could not disconnect from MongoDB");           
    }
}

export {connectDatabase,disconnectDatabase};