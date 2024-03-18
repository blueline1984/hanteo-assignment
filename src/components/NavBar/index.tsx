import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  console.log(value);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="차트" />
        <Tab label="Whook" />
        <Tab label="이벤트" />
        <Tab label="뉴스" />
        <Tab label="스토어" />
        <Tab label="충전소" />
      </Tabs>
    </Box>
  );
};

export default NavBar;
