import { gql } from "@apollo/client";

export const addComment = gql`
  mutation addComment($input: PublishCommentInput!) {
    addCommentResponse: publishComment(input: $input)
      @rest(type: "Comment", path: "/comments", method: "POST") {
      id
      post_id
      body
    }
  }
`;
