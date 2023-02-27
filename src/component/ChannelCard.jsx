import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom"
import { demoProfilePicture } from '../utils/constants';
import { CheckCircle } from '@mui/icons-material';
export default function ChannelCard({ channelDetail, marginTop }) {
    return (
        <Box sx={{
            width: { md: "266px", xs: "100%" },
            boxShadow: "none",
            borderradius: "0",
            margin: "auto",
            marginTop
        }}>

            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#FFF" }}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{ borderRadius: "50%", height: "180px", width: "180px", border: "1px solid #e3e3e3", display: "block", margin: "10px auto " }}
                    />
                    <Typography variant="h6" display="flex" alignItems="center" justifyContent="center">
                        {channelDetail?.snippet?.title}

                        <CheckCircle sx={{ fontSize: "16px", color: "#FFF", marginLeft: "3px", }} />
                    </Typography>
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                    </Typography>
                </CardContent>
            </Link>
            asdd
        </Box >
    )
}
