[{
    id: '/#12poiajddmsf',
    name: 'Andrew',
    room: 'The Office Fans'
}]
class Users {
    constructor(){
        this.users = [];
    }

    addUser(id, name, room){
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    reomveUser(id){
        var user = this.users.filter((user)=> user.id === id);

        if(user){
            var users = this.users.filter((user)=> user.id !== id);
        }

        return user;
    }
    getUser(id){
        return this.users.filter((user)=> user.id === id)[0]
    }
    getUserList(room){
        
        var users = this.users.filter((user)=> user.room === room);
        var namesArray = users.map((user)=> user.name);
        return namesArray;
    }
}

module.exports = {Users}; 