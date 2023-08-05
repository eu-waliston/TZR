interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
}

export const defaultUSer: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
};
