// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import * as uiActions from '../actions/ui';
import type { Dispatch } from '../types';

type Props = {
  setConnectedState: () => void
};

const Main = ({ setConnectedState }: Props) =>
  <div>
    <h1>Main</h1>
    <button onClick={() => setConnectedState(false)}>
      Disconnect
    </button>
  </div>;

function mapDispatchToProps(dispatch: Dispatch): {[key: string]: Function} {
  return bindActionCreators({ ...uiActions }, dispatch);
}

const connector: Connector<{}, Props> = connect(
  null,
  mapDispatchToProps,
);

export default connector(Main);