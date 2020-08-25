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

// TODO: pass down user id $userId: Int!
export const USER_MEDS = gql`
  query Meds { 
    meds(condition: {userId: 1}) {
      nodes {
        id
        name
        dosis
        frequency
        cost
      }
    }
  }
`;

export const withMeds = graphql(USER_MEDS, { name: "meds" });

export const UPDATE_MED = gql`
  mutation UpdateMed($input: UpdateMedInput!) { 
    updateMed(input: $input) {
      med {
        id
      }
    }
  }
`;

export const withUpdateMed = graphql(UPDATE_MED, { name: "updateMed" });

// TODO: pass down user id $userId: Int!
export const MED_BY_ID = gql`
  query MedById($id: Int!) { 
    med(id: $id) {
      id
      name
      dosis
      frequency
      cost
    }
  }
`;


export const withMed = graphql(MED_BY_ID, { name: "medById" });