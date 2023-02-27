import React from 'react'
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";


export default function Vidoes({ videos, direction }) {
    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            gap={1}
        >
            {videos.map((item, ind) => (
                <Box key={ind} >
                    {item.id.videoId ? <VideoCard video={item} /> : <div style={{ display: "none" }}>s</div>}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}
