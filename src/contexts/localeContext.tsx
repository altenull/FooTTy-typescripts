import * as React from 'react';
import {foottyContents} from '../assets/contents/foottyContents';

const LocaleContext = React.createContext(foottyContents.en);

export const LocaleProvider = (props: any) => {
  const value = (!!props.lang && !!foottyContents[props.lang]) ?
      foottyContents[props.lang] :
      foottyContents.en;

  return (
    <LocaleContext.Provider value={value}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export const withLocale = (Component: React.ComponentClass) => (props: any) => {
  return (
    <LocaleContext.Consumer>
      {(value) => {
        return (
          <Component {...props}
                     localizedContents={value}/>
        );
      }}
    </LocaleContext.Consumer>
  );
};