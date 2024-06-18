const express = require("express");
const router = express.Router();
const registerController = require("../controller/register.controller");

router.get("/:from/:to",(request,response)=>{
    registerController.getAllRecord(request,response)
});

router.get("/count-all",(request,response)=>{
    registerController.countAll(request,response)
});

router.post("/",(request,response)=>{
    registerController.createRecord(request,response)
});

router.delete("/:id",(request,response)=>{
    registerController.deleteRecord(request,response)
});

router.put("/:id",(request,response)=>{
    registerController.updateRecord(request,response)
});

module.exports = router;