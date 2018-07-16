import * as React from 'react';
import { connect } from 'react-redux';
import { IState } from '../reducers';

const Stories = (props: { items: any[] }) => {
  return (
    <div>
      <h1>Stories</h1>
    </div>
  );
};

function mapState(state: IState) {
  return state;
}

export default connect(mapState)(Stories);
