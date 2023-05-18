import { gql } from '@apollo/client';

export const QUERY_SINGLEUSER = gql`
{
    getSingleUser {
        _id
        username
        email
        savedBooks {
            authors
            description
            bookId
            link
            title
            }
        }
    }
    `;