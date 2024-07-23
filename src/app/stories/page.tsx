import Article from "../components/article";
import Banner from "../components/banner";
import Card from "../components/card";

export default function Village() {
  return (
    <>
      <Banner name="love" />
      <Article
        header="Together we Stand"
        p1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
      />
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 mb-20 ml-16">
        <Card
          heading="A story of resillience"
          descreption="A story of resillience"
          image="https://picsum.photos/200"
        />
        <Card
          heading="A story of resillience"
          descreption="A story of resillience"
          image="https://picsum.photos/200"
        />
        <Card
          heading="A story of resillience"
          descreption="A story of resillience"
          image="https://picsum.photos/200"
        />
      </div>
    </>
  );
}
