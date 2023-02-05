import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">Hello, You have entered the right galaxy!</Box>
    </Box>
  );
};

export default Rightbar;
