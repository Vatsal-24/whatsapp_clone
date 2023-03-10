import React from "react";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

export default function Header() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Box>
        <img src={account.picture} alt="dp" />
      </Box>
    </>
  );
}
