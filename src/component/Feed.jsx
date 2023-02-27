import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";
import { fetchDataFun } from '../utils/fetchDataFromAPI';
export default function Feed() {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([])



    useEffect(() => {
        fetchDataFun(`search?part=snippet&q=${selectedCategory}`)
            .then(data => {
                setVideos(data.items)
            })
    }, [selectedCategory]);


    return (
        <Stack
            sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <Box
                sx={{ height: { xs: "auto", md: "92vh" }, borderRight: "1px solid #e3e3e3", px: { sx: 0, md: 2 } }}
            >
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#FFF" }}>
                    copyRight 2023 Moudy.Wold
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: "2" }}>
                <Typography variant="h4" color="#FFF">
                    {selectedCategory}<span style={{ color: "#FC1503" }}> Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>
        </Stack >
    )
}
