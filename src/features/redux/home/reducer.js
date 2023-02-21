import { reducer as connectWalletReducer } from './connectWallet';
import { reducer as disconnectWalletReducer } from './disconnectWallet';
import { reducer as showMobileNetworkBarReducer} from './showMobileNetworkBar';
const reducers = [connectWalletReducer, disconnectWalletReducer,showMobileNetworkBarReducer];

const initialState = {
  address: '',
  web3: null,
  connected: false,
  networkId: 56,
  showBar:false,
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
