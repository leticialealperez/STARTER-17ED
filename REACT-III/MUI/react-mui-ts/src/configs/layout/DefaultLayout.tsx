import { Stack } from "@mui/material";

import { Footer } from "../../components/functionals/Footer";
import { Navbar } from "../../components/functionals/Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Stack spacing={2} alignItems='center'>
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
}
