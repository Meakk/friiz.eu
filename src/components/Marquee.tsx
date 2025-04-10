import Marquee from "react-fast-marquee";

import { ReactComponent as NlNet } from '../images/nlnet.svg';
import { ReactComponent as NGI0 } from '../images/ngi0.svg';

const CustomerMarquee = () => {

  return (
    <div style={{ padding: "1rem 0" }}>
      <Marquee gradient={true} gradientColor={"var(--background-color)"} gradientWidth={800} speed={50}>
        <NlNet width={100} height={40} style={{ margin: "0 20px" }} />
        <NGI0 width={100} height={40} style={{ margin: "0 20px" }} />
      </Marquee>
    </div>
  );
};

export default CustomerMarquee;
