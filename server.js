const app = require('./Src/app')
const connectedDb = require('./Src/db/db')
connectedDb()
app.listen(3000, () => {
    console.log("server is runing in the 3000port")
})