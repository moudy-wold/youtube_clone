import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

export default function SearchBar() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchTerm = (e) => {
        e.preventDefault();
        if (searchTerm)
            navigate(`/search/${searchTerm}`);
        setSearchTerm("")
    }
    return (
        <Paper
            component="form"
            onSubmit={(e) => { handleSearchTerm(e) }}
            sx={{
                borderRadius: 20,
                border: "1px solid #E3e3e3",
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input
                placeholder="Search.."
                value={searchTerm}
                className="search-bar"
                onChange={(e) => { setSearchTerm(e.target.value) }}
            />
            <IconButton
                type="submit"
                sx={{ p: "10px", color: "red" }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}
