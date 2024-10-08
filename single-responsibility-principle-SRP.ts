class User {
    constructor(public name: string, public email: string) {}
  }
  
  class UserRepository {
    private users: User[] = [];
  
    addUser(user: User) {
      this.users.push(user);
    }
  
    getUserByEmail(email: string): User | undefined {
      return this.users.find(user => user.email === email);
    }
  }
  