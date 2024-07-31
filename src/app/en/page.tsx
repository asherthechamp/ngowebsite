import Banner from "@/components/banner";

import Card from "@/components/card";
import Article from "@/components/article";
import TextCard from "@/components/textcard";
import PageController from "@/components/pageController";

export default async function Page({
  params,
}: {
  params: {
    pageName: string;
  };
}) {
  let pagesContent = new Map<string, string>();

  pagesContent.set("home", "cti7jazPMfX1pCqZYmZAa");
  pagesContent.set("whatwedo", "5lXMxiR8J26lQOzkncRgYu");
  pagesContent.set("village", "5031MYYRwI7YK3Mk8pklJp");
  pagesContent.set("stories", "3wVFRh2y8KUJlM1uSLF2VW");
  pagesContent.set("about", "3W05MQMwgbOZb6WgC1TCUH");
  pagesContent.set("takeaction", "5hJP7qpqPv7wDy2bmsV5o5");
  const s = pagesContent.get(params.pageName) || "";
  const pageData = await PageController(s);

  const card = ["home", "village", "stories", "takeaction"].includes(
    params.pageName
  );
  const textCard = ["home", "about", "whatwedo"].includes(params.pageName);

  const cardContent = card ? (
    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 mb-20 ml-16">
      <Card
        heading={pageData.cardTitle1}
        descreption={pageData.cardText1}
        image={pageData.cardImageUrl1}
      />
      <Card
        heading={pageData.cardTitle2}
        descreption={pageData.cardText2}
        image={pageData.cardImageUrl2}
      />
      <Card
        heading={pageData.cardTitle3}
        descreption={pageData.cardText3}
        image={pageData.cardImageUrl3}
      />
    </div>
  ) : (
    <div></div>
  );

  const textCardContent = textCard ? (
    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 mb-20">
      <TextCard
        heading={pageData.textCard1Title}
        descreption={pageData.textCard1Text}
        svg={pageData.textCard1SvgUrl}
      />
      <TextCard
        heading={pageData.textCard2Title}
        descreption={pageData.textCard2Text}
        svg={pageData.textCard2SvgUrl}
      />
      <TextCard
        heading={pageData.textCard3Title}
        descreption={pageData.textCard3Text}
        svg={pageData.textCard3SvgUrl}
      />
    </div>
  ) : (
    <div></div>
  );

  return (
    <>
      <Banner
        title={pageData.bannerTitle}
        text={pageData.bannerText}
        image={pageData.bannerImageUrl}
        link1={pageData.bannerLink1}
        bannerLinkUrl1={pageData.bannerLinkUrl1}
        link2={pageData.bannerLink2}
        bannerLinkUrl2={pageData.bannerLinkUrl2}
        w={pageData.bannerWidth}
        h={pageData.bannerHeight}
      />
      <Article header={pageData.articleTitle} text={pageData.articleText} />

      {cardContent}

      {textCardContent}
    </>
  );
}
