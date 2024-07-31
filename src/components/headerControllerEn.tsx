import client from "./client";
import HeaderEn from "./headerEn";

export default async function HeaderControllerEn() {
  const Header = await client.getEntry("1bBtkAmHRYK3162mHCieDa");
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
  return <HeaderEn headerData={headerData} />;
}
