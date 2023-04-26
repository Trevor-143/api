import { v4 as uuidv4 } from 'uuid';

let users = []

export const getUsers =  (req, res) => {

    res.send(users)
}

export const addUser =  (req, res) => {

    console.log('POST ROUTE REACHED');

    const user = req.body
    
    users.push({ ...user, id: uuidv4() })
    
    res.send(`User with name ${user.fName} was added to the database successfully.`);

}

export const updateUser =  (req, res) => {

    const { id } = req.params
    const { fName, lName, age, place, height } = req.body
    const userToBeUpdated = users.find((user) => user.id == id)

    if(fName) {
        userToBeUpdated.fName = fName;
    }
    if(lName) {
        userToBeUpdated.lName = lName;
    }
    if(age) {
        userToBeUpdated.age = age;
    }
    if(place) {
        userToBeUpdated.place = place;
    }
    if(height) {
        userToBeUpdated.height = height;
    }

    res.send(`The user's info with the id of ${id} was updated`)
}

export const getUser = (req, res) => {

    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser)
}

export const deleteUser = (req, res) => {

    const { id } = req.params;
    users = users.filter((user) => user.id != id)

    res.send(`The user with the id of ${id} was deleted from the database..... Sorry if this was a mistake.`)
}