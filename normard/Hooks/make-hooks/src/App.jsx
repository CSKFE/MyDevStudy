import React from 'react';
import UseAxiosComponent from './make_hooks/UseAxios';
import UseClickComponent from './make_hooks/UseClick';
import UseConfirmComponent from './make_hooks/UseConfrim';
import UseFadeInComponent from './make_hooks/UseFadeIn';
import UseFullScreenComponent from './make_hooks/UseFullScreen';
import UseInputComponent from './make_hooks/UseInput';
import UseNetworkComponent from './make_hooks/UseNetwork';
import UseNotificationComponent from './make_hooks/UseNotification';
import UseBeforeLeaveComponent from './make_hooks/UsePageLeave';
import UsePreventLeaveComponent from './make_hooks/UsePreventLeave';
import UseScrollComponent from './make_hooks/UseScroll';
import UseTabsComponent from './make_hooks/UseTabs';
import UseTitleComponent from './make_hooks/UseTitie';

const App = () => {
  return (
    <>
      <UseInputComponent />
      <UseTabsComponent />
      <UseTitleComponent />
      <UseClickComponent />
      <UsePreventLeaveComponent />
      <UseConfirmComponent />
      <UseBeforeLeaveComponent />
      <UseFadeInComponent />
      <UseNetworkComponent />
      <UseScrollComponent />
      <UseFullScreenComponent />
      <UseNotificationComponent />
      <UseAxiosComponent />
    </>
  )
};


export default App;