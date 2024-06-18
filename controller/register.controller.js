const { db } = require("../model/register.model");
const dbService = require("../services/db.service");

const createRecord = async (request,response) =>{
    const data = request.body;
    try{
        const dataRes = await dbService.insertData(data);
        response.status(200);
        response.json({
            isRegsiter : true,
            message : "Data Inserted",
            data : dataRes
        });
    }
    catch(error)
    {
        response.status(409);
        response.json({
            isRegsiter : false,
            message : "Duplicate email",
            error : error
        });
    }
}

const getAllRecord = async (request,response) =>{
    const from = request.params.from;
    const to = request.params.to;
    try{
        const dataRes = await dbService.getAllData(from,to);
        response.status(200);
        response.json({
            data : dataRes
        });
    }
    catch(error){
        response.status(404);
        response.json({
            error : error
        });
    }
}

const countAll = async (request,response) =>{
    const dataRes = await dbService.countAll();
    response.status(200);
    response.json({
        data : dataRes
    });
}

const deleteRecord = async (request,response) =>{
    let id = request.params.id;
    const dataRes = await dbService.deleteById(id);
    response.status(200);
    response.json({
        isDeleted : true,
        message : "Data Deleted !",
        data : dataRes
    });
}

const updateRecord = async (request,response) =>{
    let id = request.params.id;
    let data = request.body;
    const dataRes = await dbService.updateById(id,data);
    response.status(200);
    response.json({
        isUpdated : true,
        message : "Data Updated !",
        data : dataRes
    });
}

module.exports = {
    createRecord : createRecord,
    getAllRecord : getAllRecord,
    deleteRecord : deleteRecord,
    updateRecord : updateRecord,
    countAll : countAll
}