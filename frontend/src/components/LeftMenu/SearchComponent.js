import React from "react";
import Grid from "@mui/material/Grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchComponent() {
  const style = {
    wrapperBox: {
      borderBottom: "2px solid #e9edef",
      height: "45px",
      paddingBottom: "10px",
    },
    searchBar: {
      backgroundColor: "#f0f2f5",
      borderRadius: "5px",
    },
  };
  return (
    <>
      <Box style={style.wrapperBox}>
        <Grid container margin={1}>
          <Grid item xs={10} style={style.searchBar}>
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search or start a new chat"
              inputProps={{ "aria-label": "search" }}
              sx={{ ml: 1, flex: 1 }}
            />
          </Grid>
          <Grid item xs={2} textAlign={"center"}>
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
