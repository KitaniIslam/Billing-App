/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: {
        screens: {
          Login: 'login'
        }
      },
      Root: {
        screens: {
          Billing: {
            screens: {
              Billing: 'billing',
            },
          },
          Products: {
            screens: {
              Products: 'products',
              ProductDetails: 'ProductDetails'
            },
          },
          Settings: {
            screens: {
              Settings: 'settings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
