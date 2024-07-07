import React from 'react';
import styles from './ErrorBtn.module.scss';

type State = {
  error: boolean;
};
export class ErrorBtn extends React.Component {
  state: State = {
    error: false,
  };
  render(): React.ReactNode {
    if (this.state.error) {
      throw new Error('An error occurred.');
    }

    return (
      <button
        className={styles.errorBtn}
        onClick={(): void => {
          this.setState({ error: true });
        }}
      >
        Throw an error
      </button>
    );
  }
}
