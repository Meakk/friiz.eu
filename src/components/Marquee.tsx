import Marquee from "react-fast-marquee";

const CustomerMarquee = () => {
  return (
    <div style={{ padding: "1rem 0", zIndex: -2 }}>
      <Marquee gradient={true} gradientColor={"var(--background-color)"} gradientWidth={80} pauseOnHover={true} speed={50}>
        <img src={ process.env.PUBLIC_URL + "/assets/nlnet.svg" } alt="NLNet" width={100} height={40} style={{ margin: "0 20px" }} />
        <img src={ process.env.PUBLIC_URL + "/assets/ngi0.svg" } alt="NGI0" width={100} height={40} style={{ margin: "0 20px" }} />
      </Marquee>
    </div>
  );
};

export default CustomerMarquee;
