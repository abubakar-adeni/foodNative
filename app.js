import * as React from 'react';
import MainNavigator from './src/navigations/AppNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import storages from './src/storages/store';
import OneSignal from 'react-native-onesignal';


// OneSignal Initialization
const {store, persistor} = storages();
export default function App() {
  React.useEffect(() => {
    // OneSignal Initialization
    // OneSignal.setAppId("0eaa7f7a-d93d-4d98-a3e1-d41ae1125fec");
    // OneSignal.setAppId(`${process.env.ONESIGNAL_APP_ID}`);
    OneSignal.setAppId('0eaa7f7a-d93d-4d98-a3e1-d41ae1125fec');

    // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
    OneSignal.promptForPushNotificationsWithUserResponse();

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
