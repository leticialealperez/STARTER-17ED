import { Links } from "../../data/links";
import { Footer as FooterStyled } from "../styled/Footer";
import { Link } from "../styled/Link";

interface FooterProps {
  listaLinks: Array<Links>;
}

export function Footer(props: FooterProps) {
  return (
    <FooterStyled>
      <small>&copy; 2017–2024 Company, Inc.</small>
      <p>
        {props.listaLinks.map((item) => (
          <Link href={item.url} target="_blank">
            {item.text}
          </Link>
        ))}
      </p>
    </FooterStyled>
  );
}
