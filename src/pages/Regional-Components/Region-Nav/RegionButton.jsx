import React, { useContext } from "react";
import { RegionContext } from "../../../store/RegionContext";
import "./regionbutton.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

const RegionList = [
  "kanto",
  "johto",
  "hoenn",
  "sinnoh",
  "unova",
  "kalos",
  "alola",
  "galar",
  "hisui",
  "paldea",
];

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
];

const RegionButton = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const { updateRegion } = useContext(RegionContext);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, region, index) => {
    setSelectedIndex(index);
    setOpen(false);
    updateRegion(region);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button onClick={handleClick}>{RegionList[selectedIndex]}</Button>
        <Button size="large" onClick={handleToggle}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {RegionList.map((region, index) => (
                    <MenuItem
                      key={RegionList + index}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) =>
                        handleMenuItemClick(event, region, index)
                      }
                    >
                      {region}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
export default RegionButton;
