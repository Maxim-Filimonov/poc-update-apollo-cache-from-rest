import { gql } from "@apollo/client";

export const postsWithComments = gql`
  query GetPostsWithComments {
    allPosts {
      id
      title
      Comments {
        body
      }
    }
  }
`;
