const mongo = require("mongoose");
const registerSchema = require("../model/register.model");

mongo.connect("mongodb://127.0.0.1:27017/register");

const insertData = async (data) =>{
    const dataRes = await new registerSchema(data).save();
    return dataRes;
} 

const deleteById = async(id) =>{
    const dataRes = await registerSchema.findByIdAndDelete(id);
    return dataRes;
}

const getAllData = async (from,to) =>{
    const dataRes = await registerSchema.find().skip(from).limit(to);
    return dataRes;
}

const updateById = async (id,data) =>{
    const dataRes = await registerSchema.findByIdAndUpdate(id,data);
    return dataRes;
}
const countAll = async () =>{
    const dataRes = await registerSchema.countDocuments();
    return dataRes;
}

module.exports = {
    insertData : insertData,
    getAllData : getAllData,
    deleteById : deleteById,
    updateById : updateById,
    countAll : countAll
}