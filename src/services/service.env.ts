const {
  REACT_APP_THE_SPORTS_DB_END_POINT,
  REACT_APP_THE_SPORTS_DB_API_KEY,
} = process.env;

export const publicFoottyEndPoint = `${REACT_APP_THE_SPORTS_DB_END_POINT}/1`;
export const privateFoottyEndPoint = `${REACT_APP_THE_SPORTS_DB_END_POINT}/${REACT_APP_THE_SPORTS_DB_API_KEY}`;
