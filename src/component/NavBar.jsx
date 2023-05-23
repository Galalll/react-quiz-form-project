import React, { Component, useEffect, useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  const Loged = useSelector((state) => state.quiz.IsLoged);
  let User = useSelector((state) => state.quiz.UserName);
  console.log(User);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React Quiz
            </Typography>
            {Loged && <a color="inherit">Welcome {User}</a>}
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
