import gql from "graphql-tag";

export const CREATECOURSE = `mutation ($input: CreateCourseInput) {
  createCourse(input:$input){
      id
      title
      cover
      description
    }
  }`;