import { gql } from 'apollo-boost';

export const GET_COURSES = gql`
{
  coursesConnection(orderBy:createdAt_DESC, limit: 100){
    total
    limit
    data {
      id
      title
      description
      cover
    }
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

export const GET_SECTION_BY_COURSE_ID = gql`
query ($id: String!) {
  sectionsConnection(where: {
    courseId: $id
  }){
    data {
      id
      title
      lectures {
        id
        title
        thumbnail
        description
        embedLink
      }
    }
  }
}`;