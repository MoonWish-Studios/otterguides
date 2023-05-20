import VerticalCard from "./VerticalCard"

export default function CardScroll() {
  return (
    <div className="relative flex items-center space-x-10 overflow-x-auto scrollbar-hide">
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
      />
    </div>
  )
}
