import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// 📚 Sample data
const books = [
  { id: "1", title: "Chemistry by Samiya" },
  { id: "2", title: "Maths by ABC" },
  { id: "3", title: "Physics by DEF" },
];

// 🧩 Schema
const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!): Book
  }
`;

// ⚙️ Resolvers
const resolvers = {
  Query: {
    books: () => books,
  },

  Mutation: {
    addBook: (parent, args) => {
      const newBook = {
        id: String(books.length + 1),
        title: args.title,
      };
      books.push(newBook);
      return newBook;
    },
  },
};

// 🚀 Create server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// ▶ Start server (IMPORTANT: CORS added)
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  cors: {
    origin: "*", // 🔥 allows frontend to connect
  },
});

console.log(`🚀 Server ready at ${url}`);