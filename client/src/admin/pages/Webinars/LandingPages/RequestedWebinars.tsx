import { paths } from "constants/routes";
import React from "react";
import useFetchWebinars from "../../FileMaintenance/pages/Webinars/hooks/useFetchWebinars";
import "../style.scss";
import WebinarList from "../components/WebinarList";
import useFetchAgent from "admin/pages/Agents/hooks/useFetchAgent";
import { NOTIFICATION_ENUMS } from "constants/constants";

const RequestedWebinars: React.FC = () => {
  const breadcrumb = [
    {
      title: "Comfort Financial Solutions",
      url: paths.dashboard,
      isActive: false,
    },
    {
      title: "Requested Webinars",
      url: paths.cfsWebinars,
      isActive: true,
    },
  ];

  const { loading, webinars } = useFetchWebinars();

  const agentStorage = localStorage.getItem("userInfo");
  const { userGuid } = JSON.parse(agentStorage ?? "");
  const agentInfo = useFetchAgent(userGuid?.toString());

  const agentWebinars = agentInfo.agent?.webinars
    ?.filter(
      (data: any) => data.status === NOTIFICATION_ENUMS.WEBINARS.WEBINAR_REQUEST
    )
    ?.map((data: any) => {
      return data.webinarGuid;
    });

  const filteredWebinars = webinars?.filter((data: any) =>
    agentWebinars?.includes(data.webinarGuid)
  );

  let title = "Requested Webinars";
  let subtitle = "Manage all requested webinars.";

  const isUpToDate =
    !agentInfo?.agent?.firstName ||
    !agentInfo?.agent?.lastName ||
    !agentInfo?.agent?.licenseNumber ||
    !agentInfo?.agent?.state;
  return (
    <WebinarList
      {...{
        webinars: filteredWebinars,
        breadcrumb,
        loading,
        title,
        subtitle,
        isUpToDate,
      }}
    />
  );
};

export default RequestedWebinars;
