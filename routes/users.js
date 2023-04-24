import express from 'express';

const router = express.Router();

const users = [
    {
        fName: "Arapu",
        lName: "Trevor",
        age: 27,
        place: "Mukono",
        height: 5.9
    }
]

//alllll routes here start with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send('These should be ther users.')
})

export default router;