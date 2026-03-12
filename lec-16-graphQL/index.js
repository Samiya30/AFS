import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

let users=[
    {
        id:"1",
        name:"Samiya",
        email:"Sam@gmail.com",
        phone:78945
    },
    {
        id:"2",
        name:"romeo",
        email:"romeo@gmail.com",
        phone:78945
    },
    {
        id:"3",
        name:"sonam",
        email:"sonam@gmail.com",
        phone:78945
    }
]

const typeDefs=`
    #user ==> comment
    #user !for not null

    type User{
    id:ID!,     #ID serialized into string
    name:String,
    email:String,
    phone:Int
    }

    type Query{
        getUsers:[User],
        getOneUser(id:ID!):User
    }

    #mutation
    `

const resolvers={
    Query:{
        getUsers:()=>{
            //db call
            return users
        },
        //in resolver we have 4 arguments --->parent,args,context,info--->optional
        //args are object that contains all the input
        getOneUser:(_,args)=>{
            return users.find((u)=>u.id==args.id)
        }
    }

    //mutation()
}

//template code
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
