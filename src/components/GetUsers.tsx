import React from "react";
import {
    useInfiniteQuery
} from '@tanstack/react-query'
import InfiniteScroll from "react-infinite-scroller";
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import { get } from 'lodash';



const GetUsers = () => {

    const fetchPosts = async ({ pageParam = 1 }) => {
        const response = await fetch(
            `https://reqres.in/api/users/?page=${pageParam}`
        );
        const results = await response.json();
        return {
            results,
            nextPage: pageParam + 1,
            totalPages: results.total_pages + 1
        };
    };
    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(["usersData"], fetchPosts, {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
            return undefined;
        }
    });

    if (isLoading) return <div>Fetching users...</div>;
    if (isError) return <div>An error occurred</div>;

    return (
        <div>

            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container>
                    <Navbar.Brand href="#">Users</Navbar.Brand>
                </Container>
            </Navbar>


            <Container fluid className="mb-3">
                {/* <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage}> */}
                <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>

                    {get(data, 'pages', [])
                        .map((page) => get(page, 'results.data', [])
                            .map((post: any) => (
                                <div className="card mt-3 py-2 " key={get(post, 'id')}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4  flex items-center justify-center">
                                            <img src={get(post, 'avatar', '')} style={{ height: '200px', width: '200px', borderRadius: '50%' }}
                                                alt={get(post, 'avatar', '')} className="card-img" />
                                        </div>
                                        <div className="col-md-8 flex items-center justify-center ">
                                            <div className="card-body">
                                                <h3 className="card-title">{`${get(post, 'first_name')} ${get(post, 'last_name')}`}</h3>
                                                <p className="card-text">{get(post, 'email')}</p>
                                                {/* <p className="card-text"><small className="text-muted">{get(post, 'email')}</small></p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )))}
                    {isLoading && <div>Wait there's more...</div>}

                    {!hasNextPage && <div className="my-3 text-2xl " style={{ textShadow: ' 4px 4px 6px rgba(0,0,0,0.6)', boxShadow: ' 10px 12px 15px -2px rgba(0,0,0,0.4)' }}>End of page...No more data found</div>}
                </InfiniteScroll>

            </Container>

        </div>
    );
};

export default GetUsers;