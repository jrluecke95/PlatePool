import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import PostSection from '../components/PostSection'
import SearchPostComments from '../components/SearchPostComments';



const SearchPost = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/v1/plates/${id}/plate`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                // console.log(data.UserId)
            })
    },[id])


    return (
        <Grid container spacing={2}>
            <PostSection plate={data}/>
            <SearchPostComments plate={data}/>
        </Grid>
    )
}

export default SearchPost;