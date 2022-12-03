import {
  EVENT_ACTION_SUBMIT_TYPES,
  EVENT_ACTION_TYPES,
  EVENT_INVITES_ACTION_TYPES,
  EVENT_INVITE_ACTION_TYPES,
  EVENT_INVITE_DELETE_ACTION_TYPES,
  SUBMIT_INVITE_EVENT_ACTION_TYPES,
} from "constants/redux-constants";

export const eventListReducer = (state: any = { events: [] }, action: any) => {
  switch (action.type) {
    case EVENT_ACTION_TYPES.EVENT_LIST_REQUEST:
      return { loading: true, events: [] };
    case EVENT_ACTION_TYPES.EVENT_LIST_SUCCESS:
      return {
        loading: false,
        events: action.payload,
      };
    case EVENT_ACTION_TYPES.EVENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventInviteDetailsReducer = (
  state: any = { event: {} },
  action: any
) => {
  switch (action.type) {
    case EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_REQUEST:
      return { loading: true, ...state };
    case EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_SUCCESS:
      return {
        loading: false,
        event: action.payload,
      };
    case EVENT_INVITE_ACTION_TYPES.EVENT_INVITE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventInviteDeleteReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case EVENT_INVITE_DELETE_ACTION_TYPES.EVENT_INVITE_DELETE_REQUEST:
      return { loading: true };
    case EVENT_INVITE_DELETE_ACTION_TYPES.EVENT_INVITE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EVENT_INVITE_DELETE_ACTION_TYPES.EVENT_INVITE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const eventInvitesListReducer = (
  state: any = { eventInvites: [] },
  action: any
) => {
  switch (action.type) {
    case EVENT_INVITES_ACTION_TYPES.EVENT_INVITES_LIST_REQUEST:
      return { loading: true, eventInvites: [] };
    case EVENT_INVITES_ACTION_TYPES.EVENT_INVITES_LIST_SUCCESS:
      return {
        loading: false,
        eventInvites: action.payload,
      };
    case EVENT_INVITES_ACTION_TYPES.EVENT_INVITES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const submitInviteReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case SUBMIT_INVITE_EVENT_ACTION_TYPES.SUBMIT_INVITE_EVENT_REQUEST:
      return { loading: true };
    case SUBMIT_INVITE_EVENT_ACTION_TYPES.SUBMIT_INVITE_EVENT_SUCCESS:
      return {
        loading: false,
        eventInvite: action.payload,
      };
    case SUBMIT_INVITE_EVENT_ACTION_TYPES.SUBMIT_INVITE_EVENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createEventReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case EVENT_ACTION_SUBMIT_TYPES.EVENT_LIST_SUBMIT_REQUEST:
      return { loading: true };
    case EVENT_ACTION_SUBMIT_TYPES.EVENT_LIST_SUBMIT_SUCCESS:
      return {
        loading: false,
        event: action.payload,
      };
    case EVENT_ACTION_SUBMIT_TYPES.EVENT_LIST_SUBMIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
