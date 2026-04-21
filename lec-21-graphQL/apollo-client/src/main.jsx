import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  HttpLink,
} from "@apollo/client";

import {
  ApolloProvider,
  useQuery,
  useMutation,
} from "@apollo/client/react";


const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
  cache: new InMemoryCache(),
});

// 📚 Query
const GET_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

// ➕ Mutation
const ADD_BOOK = gql`
  mutation ($title: String!) {
    addBook(title: $title) {
      id
      title
    }
  }
`;

function App() {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);
  const [addBook] = useMutation(ADD_BOOK);

  const [title, setTitle] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAdd = async () => {
    if (!title) return;

    await addBook({
      variables: { title },
    });

    setTitle("");
    refetch(); // refresh list
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Books</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book name"
      />
      <button onClick={handleAdd}>Add</button>

      {data.books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
}

// 🚀 Render
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);