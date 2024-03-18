import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TAB_LIST } from "../../constants/tabList";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(`${TAB_LIST[newValue].value}`);
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
        {TAB_LIST.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default NavBar;
