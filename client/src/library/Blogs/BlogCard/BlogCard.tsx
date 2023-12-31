import React from "react";
import { BlogType } from "../BlogModels";
import { getDateDays, getDateMonthShort } from "helpers/date";
import UserDetails from "library/UserDetail/UserDetails";
import HtmlTooltip from "library/HtmlTooltip/HtmlTooltip";
import "./BlogCard.scss";

const BlogCard: React.FC<BlogType> = (props) => {
  return (
    <div className="blog-card" onClick={props.onClick}>
      <div className="blog-image">
        <img src={props.image} alt={props.image} />
        <div className="blog-date">
          <div className="days">{getDateDays(new Date(props.date))}</div>
          <div className="month">{getDateMonthShort(new Date(props.date))}</div>
          <div className="year"></div>
        </div>
      </div>
      <div className="blog-captions">
        <HtmlTooltip
          title={
            <div
              style={{
                fontSize: "1.3rem",
              }}
            >
              {props.title}
            </div>
          }
        >
          <h2>{props.title}</h2>
        </HtmlTooltip>
        <div className="card-blog-content">
          {props.description.replace(/<[^>]*>/g, "").replace("&quot;", " ")}
        </div>
      </div>
      <UserDetails
        authorName={props.author.authorName}
        image={props.author.image ? props.author.image : ""}
      />
    </div>
  );
};

export default BlogCard;
