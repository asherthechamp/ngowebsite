import Article from "../components/article";
import Banner from "../components/banner";
import TextCard from "../components/textcard";

export default function About() {
  return (
    <>
      <Banner name="kids3" />
      <Article
        header="Together we Stand"
        p1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
      />{" "}
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 mb-20">
        <TextCard
          heading="Lorem, ipsum dolor."
          descreption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
        />
        <TextCard
          heading="Lorem, ipsum dolor."
          descreption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
        />
        <TextCard
          heading="Lorem, ipsum dolor."
          descreption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
        />
      </div>
    </>
  );
}
