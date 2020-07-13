const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const db = req.app.get('db')
        const profilePicture = `https://robohash.org/${username}.png`
    
        const existingUser = await db.get_user_by_username(username)
    
        if (existingUser[0]) {
            return res.status(409).send('User already exists')
        }
    
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
    
        const newUser = await db.register_user([username, hash, profilePicture])
        const user = newUser[0]
    
        req.session.user = {
            username: user.username,
            id: user.id,
            profilePicture: user.profilePicture
        }
    
        res.status(200).send(req.session.user)
    },

    login: async (req, res) => {

        const { username, password } = req.body
        const db = req.app.get('db')
    
        const existingUser = await db.get_user_by_username(username)
    
        const user = existingUser[0]
    
        if (!user) {
            return res.status(404).send('User does not exist')
        }
    
        const authenticated = bcrypt.compareSync(password, user.password)
    
        if (!authenticated) {
            return res.status(403).send('Password is incorrect')
        }
    
        req.session.user = {
            username: user.username,
            id: user.id,
            profilePicture: user.profilePicture
        }
    
        res.status(200).send(req.session.user)
    }
}