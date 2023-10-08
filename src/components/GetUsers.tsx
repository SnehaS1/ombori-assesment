import React from "react";
import {
    useQuery,
} from '@tanstack/react-query'

import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { get } from 'lodash';
import { UserListGlass, UserListWrapperGlass } from "../styles";


interface Users {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const GetUsers = () => {

    const { isLoading, error, data } = useQuery<Users[], Error>({
        queryKey: ['usersData'],
        queryFn: () =>
            fetch('https://reqres.in/api/users').then(res => res.json()),
    });

    if (isLoading) return <div>Fetching posts...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    const users: Users[] = get(data, 'data', []);
    console.log('posts', users, data);

    return (
        <ul>
            <Container fluid>
                {users.map((post: any) => (

                    <UserListWrapperGlass fluid="md" className=" mb-9" key={get(post, 'id')}>

                        <Col sm={2} xs={5} className="border-orange-600">
                            <Image src={get(post, 'avatar', '')}
                                alt={get(post, 'avatar', '')} roundedCircle />
                        </Col>
                        <Col sm={10} className="flex items-center">
                            <UserListGlass>

                                <p className="font-sans md:font-serif text-left border-blue-200 h-3/5">{get(post, 'first_name') + ' ' + get(post, 'last_name')}</p>
                                <p className=" d-none d-sm-block font-sans md:font-serif text-left border-blue-200 h-3/5">{get(post, 'email')}</p>

                            </UserListGlass>
                        </Col>
                    </UserListWrapperGlass>


                ))}
            </Container>
        </ul>
    );
};

export default GetUsers;