import NoInformationToDisplay from "library/NoInformationToDisplay/NoInformationToDisplay";
import React from "react";
import { FaCheck, FaEye, FaEyeSlash, FaQuoteRight } from "react-icons/fa";
import "./Testimonials.scss";

export type TestiMonialTypes = {
  testimonial: string;
  name: string;
  title: string;
  isDisplayed: boolean;
};
type TestimonialsProps = {
  testimonials: TestiMonialTypes[];
};
const Testimonials: React.FC<TestimonialsProps> = (props) => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <NoInformationToDisplay
        showNoInfo={props.testimonials.length === 0 ? true : false}
        message="No testimonials available in this agent."
        title="NO INFORMATION TO DISPLAY"
        icon={<React.Fragment />}
      >
        <React.Fragment>
          {props.testimonials.map((testimonial, index) => (
            <div className="item">
              <div className="abosolute-icon">{index + 1}</div>
              <p className="testimonial">{testimonial.testimonial}</p>
              <div className="client-from">
                <div>
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.title}</p>
                </div>
                <div className="actions">
                  {testimonial.isDisplayed ? (
                    <button>
                      <FaEye />
                    </button>
                  ) : (
                    <button>
                      <FaEyeSlash />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      </NoInformationToDisplay>
    </div>
  );
};

export default Testimonials;
