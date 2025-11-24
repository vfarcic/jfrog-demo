interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];

  addUser(name: string, email: string): User {
    const user: User = {
      id: this.users.length + 1,
      name,
      email,
    };
    this.users.push(user);
    return user;
  }

  getUser(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserCount(): number {
    return this.users.length;
  }
}

function main(): void {
  const userService = new UserService();

  console.log("Welcome to the TypeScript Demo App!");
  console.log("===================================\n");

  const user1 = userService.addUser("Alice Johnson", "alice@example.com");
  const user2 = userService.addUser("Bob Smith", "bob@example.com");
  const user3 = userService.addUser("Carol White", "carol@example.com");

  console.log(`Added ${userService.getUserCount()} users:\n`);

  userService.getAllUsers().forEach((user) => {
    console.log(`- ${user.name} (${user.email})`);
  });

  console.log("\nFetching user with ID 2:");
  const foundUser = userService.getUser(2);
  if (foundUser) {
    console.log(`Found: ${foundUser.name} - ${foundUser.email}`);
  }

  console.log("\nDemo completed successfully!");
}

main();
