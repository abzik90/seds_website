import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import Count from "./Count";
import Countdown from './Countdown';

export const Participants = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="participants" id="participants">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="participants-bx wow zoomIn">
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme participants-slider">
                            <div className="item">
                                <h3 id='participants'><Count number={"120"} duration={"3"}/></h3>
                                <h5>Participants</h5>
                            </div>
                            <div className="item">
                                <h3 id='cases'><Count number={"4"} duration={"3"}/></h3>
                                <h5>High-tech cases</h5>
                            </div>     
                            <div className="item">
                                <h3 id='teams'><Count number={"24"} duration={"3"}/></h3>
                                <h5>Teams</h5>
                            </div>    
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="row">
                <div><></></div>
                <Countdown/>
            </div>
        </div>

       

        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
