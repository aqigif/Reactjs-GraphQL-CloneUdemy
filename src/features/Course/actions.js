import { gql } from 'apollo-boost';

export const GET_COURSES = gql`
{
  courses {
    id
    title
    description
    cover
  }
}`;

export const GET_COURSE_BY_ID = gql`
query ($id: String!) {
  course(id: $id) {
    id
    title
    cover
    description
  }
}`;