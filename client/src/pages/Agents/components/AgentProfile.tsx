import { Grid } from "@mui/material";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from "react-icons/fa";
import SocialIcons from "../SocialIcons";
import { DEFAULT_IMAGE } from "admin/constants/constants";

type AgentProfileProps = {
  noContainer?: boolean;
  agent: {
    phoneNumber: string;
    emailAddress: string;
    address: string;
    twitter: string;
    facebook: string;
    instagram: string;
    linkedIn: string;
    title: string;
    name: string;
    firstName?: string;
    lastName?: string;
    bio: string;
    avatar: string;
  };
};
const AgentProfile: React.FC<AgentProfileProps> = (props) => {
  const { agent } = props;
  return (
    <div className="welcome-section">
      <Grid container spacing={2} alignItems="center">
        <Grid item md={props.noContainer ? 3 : 6}>
          <img
            src={props.agent.avatar ? props.agent.avatar : DEFAULT_IMAGE}
            className="agent-img"
          />
        </Grid>
        <Grid item md={props.noContainer ? 9 : 6}>
          <div className="agent-captions">
            {/* <h1>
              <span>{agent.title}</span>
            </h1> */}
            <h5>
              {!agent?.name
                ? agent.firstName + " " + agent?.lastName
                : !agent?.name}
            </h5>
            <p>{agent.bio}</p>

            <ul className="contacts">
              <li>
                <span>
                  <FaPhone />
                </span>
                {agent.phoneNumber}
              </li>
              <li>
                <span>
                  <FaRegEnvelope />
                </span>
                {agent.emailAddress}
              </li>
              <li>
                <span>
                  <FaMapMarkerAlt />
                </span>
                {agent.address}
              </li>
            </ul>

            <SocialIcons
              twitter={agent.twitter}
              facebook={agent.facebook}
              instagram={agent.instagram}
              linkedIn={agent.linkedIn}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AgentProfile;
