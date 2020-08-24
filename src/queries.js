import { graphql } from "react-apollo";
import gql from "graphql-tag";

export const USERS = gql`
  query Users {
    users {
      nodes {
        name
      }
    }
  }
`;

export const withUsers = graphql(USERS, { name: "users" });