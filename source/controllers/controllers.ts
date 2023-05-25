import { PrismaClient } from "@prisma/client";
import express, { Request, Response, NextFunction } from "express";

const app = express();
const prisma = new PrismaClient();

async function postUser(req: Request, res: Response, next: NextFunction){
    const user = await prisma.user.create({
      data:{
          nick: req.body.nick,
          map: req.body.map,
          gun:req.body.gun,
          skin: req.body.skin
        }})
    console.log('Usuário lançado')
    res.send(user)
}
async function getId(req: Request, res: Response, next: NextFunction){
    let user  
    if(req.body.id){
        user = await prisma.user.findFirst({
          where:{
              id: req.body.id
          }
      })
      } else{
        user = await prisma.user.findMany()   
      }
    res.send(user)
}
async function deleteId(req: Request, res: Response, next: NextFunction){
    const deleted = await prisma.user.delete({
        where:{
            id: req.body.id
        }
    })
    res.send(`O id ${req.body.id} foi deletado`)
}
async function updateId(req: Request, res: Response, next: NextFunction){
    let user
    if(req.body.data.nick && req.body.data.map && req.body.data.gun && req.body.data.skin){
        user = await prisma.user.update({
            where:{
                id: req.body.id
            },
            data:{
                nick: req.body.data.nick,
                map: req.body.data.map,
                gun:req.body.data.gun,
                skin: req.body.data.skin
            }
        
    })}else {
        if(req.body.data.nick){
            user = await prisma.user.update({
                where:{
                    id: req.body.id
                },
                data:{
                    nick: req.body.data.nick
                }
            
        })} if(req.body.data.map){
            user = await prisma.user.update({
                where:{
                    id: req.body.id
                },
                data:{
                    map: req.body.data.map
                }
            
        })}if(req.body.data.gun){
            user = await prisma.user.update({
                where:{
                    id: req.body.id
                },
                data:{
                    gun: req.body.data.gun
                }
            
        })}if(req.body.data.skin){
            user = await prisma.user.update({
                where:{
                    id: req.body.id
                },
                data:{
                    skin: req.body.data.skin
                }
            
        })}}
        res.send(user)
}

export default{updateId, deleteId, getId, postUser}