const User = require("../models/User");

const UserController = {
    create: async (req, res) => {

        try {
            const {nome, email, idade} = req.body;

            const  user= await User.create({nome, email, idade});

            return res.status(200).json({ msg: 'usuario criado com sucesso',user});

        } catch (error) {
            return res.status(500).json({ msg: 'contrate o suporte'});
            
        }
    },
    update: async (req, res) => {

        try {
            const {id} = req.params;
            const {nome, email, idade} = req.body;

            const userFinded = await User.findById(id);

            if(!userFinded){
                return res.status(400).json({ msg: 'usuario nao encontrado'});
            }
            await User.findByIdAndUpdate(id, {
                nome,
                email,
                idade
            });
            return res.status(200),json({
                msg: 'usuario atualizado com sucesso'
            });      
            
        } catch (error) {
            return res.status(500).json({
                msg: 'contrate o suporte'
            })
            
        }
    },
    delete: async (req, res) => {
        try {
            const {id} =req.params;
            await User.findByIdAndDelete(id);
            return res.status(500).json({
                msg: 'usuario deletado com sucesso'
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'contrate o suporte'
            })
            
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json({
                msg: 'contrate o suporte'
            })
        }
    },
    getOne: async (req, res) => {
        try {
            const {id} =req.params;
            const user = await User.findOne(id);
            return res.status(200).json({
                msg: 'usuario encontrado com sucesso',
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'contrate o suporte'
            })
        }
    }
}
module.exports = UserController;