import React from 'react';
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar, Feed, SearchFeed, VideoDetails, ChannelDetails } from "./component/index";

export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{ background: "#000" }}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetails />} />
                    <Route path="/channel/:id" element={<ChannelDetails />} />
                    <Route path="/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>

    )
}
