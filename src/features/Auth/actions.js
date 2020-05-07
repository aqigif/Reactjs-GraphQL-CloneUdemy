import gql from "graphql-tag";

export const LOGIN = `mutation ($input: LoginInput) {
    login(input:$input){
      token,
      user{
        id
        firstName
        lastName
        email
        phoneNumber
        verify
        role
      }
    }
  }`;