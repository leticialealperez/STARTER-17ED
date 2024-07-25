import { Container, Link, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container component='footer'>
      <Typography variant='body2' color={"GrayText"} textAlign='center' marginTop={5}>
        Copyright &copy;&nbsp;
        <Link href='https://growdev.com.br' target='_blank'>
          Meu site
        </Link>
        &nbsp;
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
