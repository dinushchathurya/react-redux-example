import React from 'react';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const UserContainers = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserImage = styled.div `
    width: 7em;
    height:7em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const UserName = styled.div `
    font-size: 20px;
    color: #000;
    margin:0;
`

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users,
}))

export function UsersList(props) {
    const { users } = useSelector(stateSelector);

    const isEmptyUsers = !users || (users && users.lenght === 0);

    if(isEmptyUsers)
        return null;
    return <UserContainers>
        {users.map((user, idx) =>{
            <UserWrapper key={idx}>
                <UserImage>
                    <img src= {user.avatar} />
                </UserImage>
                <UserName>
                    {user.first_name} {user.last_name}
                </UserName>
            </UserWrapper>
        })}
    </UserContainers>
}