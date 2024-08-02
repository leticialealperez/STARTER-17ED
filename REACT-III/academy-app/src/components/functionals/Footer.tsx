import { Box, Link, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box component='footer'>
      <Typography>
        Copyright &copy;
        <Link href='#'>Site</Link>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
}
