import VerticalCard from "./VerticalCard"

export default function CardScroll() {
  return (
    <div className="relative flex items-center  overflow-x-auto scrollbar-hide ">
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
        pad={true}
      />
      <VerticalCard
        city={"Long Beach"}
        numGuides={"7"}
        img={"/assets/longbeach.png"}
        pad={false}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
        pad={false}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
        pad={false}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
        pad={false}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
        pad={false}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
        pad={false}
      />
      <VerticalCard
        city={"Los Angeles"}
        numGuides={"12"}
        img={"/assets/la.jpg"}
        pad={false}
      />
    </div>
  )
}
