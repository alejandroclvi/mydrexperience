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

export const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($input: createAppointmentInput!) {
    appointment(input: $input) {
      id
    }
  }
`;

export const withCreateAppointment = graphql(CREATE_APPOINTMENT, { name: "createAppointment" });