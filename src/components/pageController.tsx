import client from "@/components/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";

export default async function PageController(id: string) {
  let pageData = {
    title: "",
    bannerTitle: "",
    bannerText: "",
    bannerImageUrl: "",
    bannerWidth: 0,
    bannerHeight: 0,
    bannerLink1: "",
    bannerLinkUrl1: "",
    bannerLink2: "",
    bannerLinkUrl2: "",

    articleTitle: "",
    articleText: "",

    cardTitle1: "",
    cardText1: "",
    cardImageUrl1: "",

    cardTitle2: "",
    cardText2: "",
    cardImageUrl2: "",

    cardTitle3: "",
    cardText3: "",
    cardImageUrl3: "",

    textCard1Title: "",
    textCard1Text: "",
    textCard1SvgUrl: "",

    textCard2Title: "",
    textCard2Text: "",
    textCard2SvgUrl: "",

    textCard3Title: "",
    textCard3Text: "",
    textCard3SvgUrl: "",
  };
  try {
    const Content = await client.getEntry(id);

    const title: any = Content.fields?.title;

    //banner

    const bannerTitle: any = Content.fields?.bannerTitle;
    const preBannerText: any = Content.fields?.bannerText;
    const bannerText: any = documentToReactComponents(preBannerText);
    const bannerImage: any = Content.fields?.bannerImage;
    const bannerImageUrl: any = "https:" + bannerImage.fields?.file.url;
    const bannerWidth: any = bannerImage.fields?.file.details.image.width;
    const bannerHeight: any = bannerImage.fields?.file.details.image.height;
    const bannerLink1: any = Content.fields?.bannerLink1;
    const bannerLinkUrl1: any = Content.fields?.bannerLinkUrl1;
    const bannerLink2: any = Content.fields?.bannerLink2;
    const bannerLinkUrl2: any = Content.fields?.bannerLinkUrl2;

    //article

    const articleTitle: any = Content.fields?.articleTitle;
    const preArticleText: any = Content.fields?.articleText;
    const articleText: any = documentToReactComponents(preArticleText);

    //card1

    const cardTitle1: any = Content.fields?.cardTitle1;
    const preCardText1: any = Content.fields?.cardText1;
    const cardText1: any = documentToReactComponents(preCardText1);
    const cardImage1: any = Content.fields?.cardImage1;
    const cardImageUrl1: any = "https:" + cardImage1?.fields?.file.url;

    //card2

    const cardTitle2: any = Content.fields?.cardTitle2;
    const preCardText2: any = Content.fields?.cardText2;
    const cardText2: any = documentToReactComponents(preCardText2);
    const cardImage2: any = Content.fields?.cardImage2;
    const cardImageUrl2: any = "https:" + cardImage2?.fields?.file.url;

    //card3

    const cardTitle3: any = Content.fields?.cardTitle3;
    const preCardText3: any = Content.fields?.cardText3;
    const cardText3: any = documentToReactComponents(preCardText3);
    const cardImage3: any = Content.fields?.cardImage3;
    const cardImageUrl3: any = "https:" + cardImage3?.fields?.file.url;

    //text card 1

    const textCard1Title: any = Content.fields?.textCard1Title;
    const preTextCard1Text: any = Content.fields?.textCard1Text;
    const textCard1Text: any = documentToReactComponents(preTextCard1Text);
    const textCard1Svg: any = Content.fields?.textCard1Svg;
    const textCard1SvgUrl: any = "https:" + textCard1Svg?.fields?.file.url;

    //text card 2

    const textCard2Title: any = Content.fields?.textCard2Title;
    const preTextCard2Text: any = Content.fields?.textCard2Text;
    const textCard2Text: any = documentToReactComponents(preTextCard2Text);
    const textCard2Svg: any = Content.fields?.textCard2Svg;
    const textCard2SvgUrl: any = "https:" + textCard2Svg?.fields?.file.url;

    //text card 3

    const textCard3Title: any = Content.fields?.textCard3Title;
    const preTextCard3Text: any = Content.fields?.textCard3Text;
    const textCard3Text: any = documentToReactComponents(preTextCard3Text);
    const textCard3Svg: any = Content.fields?.textCard3Svg;
    const textCard3SvgUrl: any = "https:" + textCard3Svg?.fields?.file.url;

    pageData = {
      title,
      bannerTitle,
      bannerText,
      bannerImageUrl,
      bannerWidth,
      bannerHeight,
      bannerLink1,
      bannerLinkUrl1,
      bannerLink2,
      bannerLinkUrl2,

      articleTitle,
      articleText,

      cardTitle1,
      cardText1,
      cardImageUrl1,

      cardTitle2,
      cardText2,
      cardImageUrl2,

      cardTitle3,
      cardText3,
      cardImageUrl3,

      textCard1Title,
      textCard1Text,
      textCard1SvgUrl,

      textCard2Title,
      textCard2Text,
      textCard2SvgUrl,

      textCard3Title,
      textCard3Text,
      textCard3SvgUrl,
    };
  } catch (error) {
    throw error;
  }
  return pageData;
}
