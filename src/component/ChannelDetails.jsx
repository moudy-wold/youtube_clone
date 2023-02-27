import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from './';
import { fetchDataFun } from '../utils/fetchDataFromAPI';
export default function ChannelDetails() {

    const { id } = useParams();
    const [video, setVideo] = useState(null)
    const [channel, setCahnnel] = useState(null)

    useEffect(() => {
        fetchDataFun(`channels?part=snippet&id=${id}`)
            .then((data) => setCahnnel(data?.items[0]))

        fetchDataFun(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideo(data?.items))
    }, [id])
    return (
        <Box minHeight="95vh">
            <div style={{
                height: "250px",
                background: " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(191,0,136,1) 100%)",
                zIndex: 10,
            }} />
            <ChannelCard marginTop="-115px" channelDetail={channel} />
            <Box display="flex" p={2}>
                <Box sx={{ mr: { sm: "100px" } }} />
                {video != null && <Videos videos={video} />}
            </Box>
        </Box>
    )
}
