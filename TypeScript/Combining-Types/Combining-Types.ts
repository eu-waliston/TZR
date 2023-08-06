interface Posts {
  posts: {};
}

interface User extends Posts {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post extends Posts {
  id: string;
  title: string;
  body: string;
}

type Blog = User | Post;

export const getDefaultUserAndPosts = (): Blog => {
  return {
    id: "1",
    firstName: "Matt",
    lastName: "Pocock",
    posts: [
      {
        id: "1",
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();

console.log(userAndPosts.posts[0]);
