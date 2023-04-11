const express = require("express")

const routes = express.Router()

let lista = [{"id":1, "nome":"joão", "idade":20}, {"id":2, "nome":"pedro", "idade":18}, {"id":3, "nome":"fabiana", "idade":19}]

routes.get("/",(req, res)=>{
    res.status(200).json(lista)
})

routes.get("/:id",(req, res)=>{
    res.status(200).json(lista[req.params.id-1])
})

routes.delete("/:id",(req, res)=>{
    lista.splice(req.params.id-1,1)
    res.status(200).redirect("/")
})

routes.put("/:id",(req, res)=>{

})

module.exports = routes