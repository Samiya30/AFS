import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

const books=[
    {title:"chemistry by samiya"},
    {title:"Maths by abc"},
    {title:"physics by def"}
]

const authors=[
    {name:"Samiya"},
    {name:"abc"},
    {name:"def"},
    {name:"xyz"}
]
const typeDefs=`
    union SearchResult = Book | Author
    type Book {
        title: String!
    }
    type Author {
        name: String!
    }
    type Query{
        search(contains: String): [SearchResult]
  }

    `

const resolvers={
    SearchResult:{
    __resolveType(obj, contextValue, info){
      // Only Author has a name field
      if(obj.name){
        return 'Author';
      }
      // Only Book has a title field
      if(obj.title){
        return 'Book';
      }
      return null;  //graphql error is thrown
    },
},
    Query:{
    search:(parent,args,context,info)=>{
        let {contains} =args;
        const data=[...books,...authors]
        return data.filter(item => {        //filter returns array
        if (item.name) {
            return item.name.toLowerCase().includes(contains.toLowerCase());
        }
        if (item.title) {
            return item.title.toLowerCase().includes(contains.toLowerCase());
        }
    });
    }
},
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`Server ready at: ${url}`);
