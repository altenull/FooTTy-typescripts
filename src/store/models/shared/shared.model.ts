export interface ActionType {
  type: string;
}

export interface AsyncActionType {
  INDEX: string;
  REQUEST: string;
  SUCCESS: string;
  FAIL: string;
}

export interface SagaActionType {
  type: string;
  payload: any;
}

export interface SocialUrls {
  websiteUrl?: string | null;
  facebookUrl?: string | null;
  twitterUrl?: string | null;
  instagramUrl?: string | null;
  youtubeUrl?: string | null;
}