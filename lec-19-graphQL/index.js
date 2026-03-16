import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

let users = [
    {
        id: 1,
        name: "Samiya",
        email: "sam@gmail.com",
        phone: 1234567890
    },
    {
        id: 2,
        name: "abc",
        email: "abc.gmail.com",
        phone: 1234567890
    },
    {
        id:3,
        name:"xyz",
        email:"xyz.gmail.com",
        phone:1234567890
    }
]

let blogs=[
  {
    id:1,
    title:"Blog-1",
    description:"My first Blog",
    date:"12-03-2026",
    userID:1
  },
  {
    id:2,
    title:"Blog-2",
    description:"My second Blog",
    date:"13-03-2026",
    userID:2
  }
]

const typeDefs = `
#graphql

  type User {
    id: ID!
    name: String
    email: String
    phone: Int
    blog:[Blog]
  }

  type Blog{
    id:ID!
    title:String
    description:String
    date:String
    userID:ID!
    user:User
  }

  type Query {
    getUsers: [User]
    getOneUser (_id: ID!): User
    getBlogs:[Blog]
    getBlogByID(_id:ID!):Blog
  }

  type Mutation{
    addUser(id: ID!, name: String, email: String, phone: Int):User
    deleteUser(id: ID!):[User]
    updateUser(id:ID!,name:String,email:String,phone:Int):User

    addBlog(id:ID!,title:String,description:String,date:String):[Blog]
    deleteBlog(id:ID!):[Blog]
    updateBlog(id:ID!,title:String,description:String,date:String):Blog
  }
`;

const resolvers = {
  Query: {
    getUsers: () => {
        return users;
    },

    getOneUser: (_,args)=>{
        return users.find((u)=>u.id==args._id);
    },

    getBlogs:()=>{
        return blogs;
    },

    getBlogByID:(_,args)=>{
        return blogs.find((b)=>b.id==args._id);
    }
  },

  Mutation:{
    addUser:(_,args) => {
        let {id,name,email,phone}=args;

        let newUser={
          id:id,
          name:name,
          email:email,
          phone:phone
        }

        users.push(newUser);
        return newUser;
    },

    deleteUser:(_,args)=>{
       let {id}=args;
       users=users.filter((u)=>u.id!=id);
       return users;
    },

    updateUser:(_,args)=>{
        let {id,name,email,phone}=args;

        let updateUser=users.find((u)=>u.id==id);

        updateUser.name=name;
        updateUser.email=email;
        updateUser.phone=phone;

        return updateUser;
    },

    addBlog:(_,args)=>{
        let {id,title,description,date}=args;

        let newBlog={
          id:id,
          title:title,
          description:description,
          date:date,
          userID:userID
        }

        blogs.push(newBlog);
        return blogs;
    },

    deleteBlog:(_,args)=>{
        let {id}=args;
        blogs=blogs.filter((b)=>b.id!=id);
        return blogs;
    },

    updateBlog:(_,args)=>{
        let {id,title,description,date}=args;

        let updateBlog=blogs.find((b)=>b.id==id);

        updateBlog.title=title;
        updateBlog.description=description;
        updateBlog.date=date;

        return updateBlog;
    }
  },

  User:{
    blog:(parent)=>{
      return blogs.filter((b)=>b.userID==parent.id);
    }
  },

  Blog:{
    user:(parent)=>{
      return users.find((u)=>u.id==parent.userID);
    }
  }

};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(` Server ready at: ${url}`);