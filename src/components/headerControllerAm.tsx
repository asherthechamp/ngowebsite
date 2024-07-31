import client from "./client";
import HeaderAm from "./headerAm";

export default async function HeaderControllerAm() {
  const Header = await client.getEntry("6IIAU9dLnohVmo7wlcUlN5");
  const homeLink = Header.fields.homeLink;
  const whatWeDoLink = Header.fields.whatWeDoLink;
  const villageLink = Header.fields.villageLink;
  const storiesLink = Header.fields.storiesLink;
  const aboutLink = Header.fields.aboutLink;
  const takeActionLink = Header.fields.takeActionLink;

  const headerImage: any = Header.fields.logo;
  const headerImageUrl = "https:" + headerImage.fields.file.url;

  const headerData = {
    homeLink,
    whatWeDoLink,
    villageLink,
    storiesLink,
    aboutLink,
    takeActionLink,
    headerImageUrl,
  };
  return <HeaderAm headerData={headerData} />;
}
