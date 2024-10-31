class User {
  // User code here
  constructor(username,password,age){
    this.username = username ;
    this.password=password;
    this.age=age;
    this.LoggedIn = false ;
  }
  login(password){
    if (this.password === password){
      this.LoggedIn=true;
      return true;
    }else {
      throw new Error('Incorrect Password');
    }
  }
  logout(){
    this.LoggedIn = false ;
  }
}

module.exports = User;
