import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from './../utils/constants';

export default function VideoCard({ video: { id: { videoId }, snippet } }) {
    return (
        <Card sx={{ width: { md: "266px", xs: "100%" }, boxShadow: "none", borderradius: "0" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: "358px", height: "180px" }}
                />
            </Link>
            <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="#FFF">
                        {snippet?.channelTtitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}
