const adminCfsRoute = "/portal/";

const adminPaths = {
  index: adminCfsRoute + "",
  login: adminCfsRoute + "login",
  loginWithParams: adminCfsRoute + "login/:change_password_status",
  agents: adminCfsRoute + "agents",
  dashboard: adminCfsRoute + "dashboard",
  profile: adminCfsRoute + "profile",
  profileForm: adminCfsRoute + "profile/form",
  profileFormWithProfileId: adminCfsRoute + "profile/form/:userGuid",
  appointments: adminCfsRoute + "appointments/",
  typeAppointments: adminCfsRoute + "appointments/:typeId",
  agentAppointments: adminCfsRoute + "appointments/:agentId/:typeId",
  scheduledAppointments:
    adminCfsRoute + "appointments/:agentGuid/:typeId/:webinarGuid",
  appointmentInformation:
    adminCfsRoute + "scheduled-appointment/:appointmentId",
  calendar: adminCfsRoute + "calendar",
  contacts: adminCfsRoute + "contacts",
  settings: adminCfsRoute + "settings",
  profileSettings: adminCfsRoute + "profile-settings/:userGuid",
  notifications: adminCfsRoute + "notifications",
  adminBlogs: adminCfsRoute + "blogs",
  adminBlogsFileMaintenance: adminCfsRoute + "blogs/file-maintenance",
  adminViewBlogs: adminCfsRoute + "blogs/view/:blogTitle",
  adminBlogForm: adminCfsRoute + "blogs/form/:id",
  adminBlogUsers: adminCfsRoute + "editors",
  faqs: adminCfsRoute + "faqs",
  raiseSupport: adminCfsRoute + "raise-support",
  contactAdmin: adminCfsRoute + "contact-admin",
  adminAgents: adminCfsRoute + "agents",
  agentRequests: adminCfsRoute + "agent-requests",
  deactivatedAgents: adminCfsRoute + "deactivated-agents",
  declinedAgents: adminCfsRoute + "declined-agents",
  adminAgentProfile: adminCfsRoute + "agents/:id",
  adminAgentRequestProfile: adminCfsRoute + "agent-requests/:id",
  adminDeclinedAgentProfile: adminCfsRoute + "declined-agents/:id",
  adminDeactivatedAgentProfile: adminCfsRoute + "deactivated-agents/:id",
  adminAgentForm: adminCfsRoute + "agents/form/:action",
  inquiries: adminCfsRoute + "inquiries",
  newAdminEvents: adminCfsRoute + "events",
  newAdminEventsForm: adminCfsRoute + "events/:id",
  newAdminEventInvites: adminCfsRoute + "event-invites",
  webinar: adminCfsRoute + "webinar",
  cfsWebinars: adminCfsRoute + "cfs-webinars",
  activatedWebinars: adminCfsRoute + "cfs-webinars/activated",
  requestedWebinars: adminCfsRoute + "cfs-webinars/requested",
  viewSingleDynamicWebinar: adminCfsRoute + "cfs-webinars/view/:webinarId",
  allAgentWebinars: adminCfsRoute + "cfs-webinars/all/:status",
  webinarSingle: adminCfsRoute + "webinar/:webinarId",
  webinarAdminForm: adminCfsRoute + "webinar-form/:id",
  homeMetatags: adminCfsRoute + "home-metatags",
  landingPage: adminCfsRoute + "landing-page",
  landingPageInfo: adminCfsRoute + "landing-page/accounts/:pageId",
  users: adminCfsRoute + "users",
} as const;

export default adminPaths;
