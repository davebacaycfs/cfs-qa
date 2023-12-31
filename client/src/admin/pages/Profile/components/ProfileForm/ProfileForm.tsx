import Wrapper from "admin/components/Wrapper/Wrapper";
import { CrumbTypes } from "admin/pages/Dashboard/types";
import { paths } from "constants/routes";
import React, { useContext, useState } from "react";
import "./ProfileForm.scss";
import MainForm from "./components/MainForm";
import { Grid } from "@mui/material";
import { FaAngleDoubleRight } from "react-icons/fa";
import PasswordForm from "./components/PasswordForm";
import EmailForm from "./components/EmailForm";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";
import useFetchUserProfile from "admin/hooks/useFetchProfile";
import { UserContext } from "admin/context/UserProvider";
import RolesForm from "./components/RolesForm";

const crumbs: CrumbTypes[] = [
  {
    title: "Comfort Financial Solutions",
    url: paths.dashboard,
    isActive: false,
  },
  {
    title: "Profile",
    url: paths.profile,
    isActive: false,
  },
  {
    title: "Edit Profile",
    url: paths.profileForm,
    isActive: true,
  },
];

const ProfileForm: React.FC = () => {
  const userCtx = useContext(UserContext) as any;

  const { userGuid } = useParams();
  const { profile, loading } = useFetchUserProfile(
    userGuid ? userGuid : userCtx?.user?.userGuid ?? ""
  );

  const { profile: adminProfile, loading: adminLoading } = useFetchUserProfile(
    userCtx?.user?.userGuid ?? ""
  );

  const isAdmin = adminProfile?.position?.some(
    (e) => e.value === "POSITION_MASTER_ADMIN"
  );

  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState({
    main: true,
    password: false,
    email: false,
    roles: false,
  });

  const formClassnames = classNames("profile-form-content", {
    "password-form": activeForm.password,
    "roles-form": activeForm.roles,
  });

  return (
    <Wrapper
      breadcrumb={crumbs}
      error={false}
      loading={loading}
      className="profile-form-wrapper"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={isAdmin ? 4 : 6}>
          <div className="white-card">
            <div className="caption-holder">
              <h2>Profile Settings</h2>
              <p>Change your personal website settings.</p>
            </div>
            <button
              onClick={() =>
                navigate(
                  paths.profileSettings.replace(
                    ":userGuid",
                    profile?.userGuid ?? ""
                  )
                )
              }
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={isAdmin ? 4 : 6}>
          <div className="white-card">
            <div className="caption-holder">
              <h2>Password</h2>
              <p>Change your password.</p>
            </div>
            <button
              onClick={() =>
                setActiveForm({
                  main: false,
                  email: false,
                  password: true,
                  roles: false,
                })
              }
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        </Grid>
        {isAdmin ? (
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div className="white-card">
              <div className="caption-holder">
                <h2>Roles & Position</h2>
                <p>Change user roles and position.</p>
              </div>
              <button
                onClick={() =>
                  setActiveForm({
                    main: false,
                    email: false,
                    password: false,
                    roles: true,
                  })
                }
              >
                <FaAngleDoubleRight />
              </button>
            </div>
          </Grid>
        ) : null}
      </Grid>
      <div className={formClassnames}>
        {activeForm.main ? <MainForm profile={profile} /> : null}
        {activeForm.password ? <PasswordForm profile={profile} /> : null}
        {activeForm.email ? <EmailForm profile={profile} /> : null}
        {activeForm.roles ? <RolesForm profile={profile} /> : null}
      </div>
    </Wrapper>
  );
};

export default ProfileForm;
