import React from 'react'
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map(item => (
                <button className="category-btn"
                    onClick={() => setSelectedCategory(item.name)}
                    style={{ backgroundColor: item.name === selectedCategory && "#FC1503", color: "#FFF", }}
                    key={item.name}>
                    <span
                        style={{ color: item.name === selectedCategory ? "#FFF" : "red", marginLeft: "15px", marginRight: "5px" }}>
                        {item.icon}
                    </span>
                    <span
                        style={{ opacity: item.name === selectedCategory ? "1" : "0.8", color: "#FFF" }}>
                        {item.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}
