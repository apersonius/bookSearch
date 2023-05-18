import { gql } from '@apollo/client';

export const QUERY_SINGLEUSER = gql`
    query getSingleUser {
        me {
            _id
            username
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
    `;