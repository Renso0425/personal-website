import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/types";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <div>
      <AnchorLink
          className={`${selectedPage === lowerCasePage ? "text-primary-300" : ""}
              transition duration-500 hover:text-primary-300
          `}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}>
          {page}
      </AnchorLink>
    </div>
  )
}

export default Link