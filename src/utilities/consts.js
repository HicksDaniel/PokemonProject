import styled, { useTheme } from "styled-components";
import { ListItemButton, ListItemIcon, Drawer } from "@mui/material";

export const CustomListItemButton = styled(ListItemButton)`
  min-height: 48;
  padding: 0 2.5px 0 2.5px;
  justify-content: ${(props) => (props.open ? "initial" : "center")};
`;

export const CustomListItemIcon = styled(ListItemIcon)`
  min-width: 0px;
  margin: ${(props) => (props.open ? "auto" : "4px")};
`;

export const CustomDrawer = styled(Drawer)``;
