import express from 'express';

const router = express.Router();

const users = [
    {
        fName: "Arapu",
        lName: "Trevor",
        age: 27,
        place: "Mukono",
        height: 5.9
    },
    {
        fName: "Oluka",
        lName: "Martin",
        age: 30,
        place: "Nakawa",
        height: 6
    }
]
 
//alllll routes here start with /users
router.get('/', (req, res) => {
    console.log(users);
    // res.send('These should be ther users.');
    res.send(users)
})

router.post('/', (req, res) => {
    
})

export default router;