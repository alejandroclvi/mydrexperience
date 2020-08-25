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
  mutation CreateAppointment($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      appointment {
        id
      }
    }
  }
`;

export const withCreateAppointment = graphql(CREATE_APPOINTMENT, { name: "createAppointment" });
// TODO: pass down user id $userId: Int!
export const USER_APPOINTMENTS = gql`
  query Appointments { 
    appointments(condition: {userId: 1}) {
      nodes {
        doctor
        time
        date
        location
      }
    }
  }
`;

export const withAppointments = graphql(USER_APPOINTMENTS, { name: "withAppointments" });