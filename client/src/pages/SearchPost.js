import { Grid } from '@material-ui/core';
import React from 'react'
import PostSection from '../components/PostSection'
import SearchPostComments from '../components/SearchPostComments';



const SearchPost = () => {
    return (
        <Grid container spacing={2}>
            <PostSection />
            <SearchPostComments />
        </Grid>
    )
}

export default SearchPost;