import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  gql,
  HttpLink,
  InMemoryCache,
  useMutation,
  useQuery,
} from "@apollo/client";
import React, { useRef } from "react";
import { RestLink } from "apollo-link-rest";
import { postsWithComments } from "./gqlQueries";
import {
  AddCommentDocument,
  GetPostsWithCommentsDocument,
} from "./graphql-operations";

function Post(post: {
  id: string;
  title: string;
  Comments: { body: string }[];
}) {
  const newComment = useRef<HTMLInputElement>(null);
  const [addCommentFn] = useMutation(AddCommentDocument, {
    update: (cache, { data }) => {
      const posts = cache.readQuery({
        query: GetPostsWithCommentsDocument,
      });
      cache.writeQuery({
        query: GetPostsWithCommentsDocument,
        data: {
          allPosts: posts?.allPosts?.map((post: any) => {
            if (post.id === data?.addCommentResponse?.post_id) {
              return {
                ...post,
                Comments: [...post.Comments, data?.addCommentResponse],
              };
            }
            return post;
          }),
        },
      });
    },
  });
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>Comments</h2>
      {post.Comments.map((comment) => (
        <div key={comment.body}>{comment.body}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCommentFn({
            variables: {
              input: {
                post_id: post.id,
                body: newComment.current?.value || "",
              },
            },
          });
        }}
      >
        <input type="textarea" ref={newComment} />
        <button type="submit">Add new comment</button>
      </form>
    </div>
  );
}

function App() {
  const { data, loading, error } = useQuery(GetPostsWithCommentsDocument);
  return (
    <div>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {data &&
        data.allPosts?.map((post: any) => <Post key={post.id} {...post} />)}
    </div>
  );
}
const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});
const restLink = new RestLink({ uri: "http://localhost:3000" });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink, httpLink]),
});
export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
