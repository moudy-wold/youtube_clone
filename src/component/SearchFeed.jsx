import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "./index";
import { fetchDataFun } from '../utils/fetchDataFromAPI';
export default function SearchFeed() {
    const { searchTerm } = useParams()
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetchDataFun(`search?part=snippet&q=${searchTerm}`)
            .then(data => {
                setVideos(data.items)
            })
    }, [searchTerm]);


    return (
        <Box p={2} sx={{ overflowY: "auto", height: "92vh", width: "100%", margin: "auto" }}>
            <Typography variant="h4" color="#FFF">
                Search Resulr For : <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
            </Typography>
            <Videos videos={videos} />
        </Box>

    )
}
