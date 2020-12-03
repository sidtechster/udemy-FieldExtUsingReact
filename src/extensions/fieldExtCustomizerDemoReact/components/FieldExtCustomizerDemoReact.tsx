import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';

import styles from './FieldExtCustomizerDemoReact.module.scss';

export interface IFieldExtCustomizerDemoReactProps {
  text: string;
}

const LOG_SOURCE: string = 'FieldExtCustomizerDemoReact';

export default class FieldExtCustomizerDemoReact extends React.Component<IFieldExtCustomizerDemoReactProps, {}> {
  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: FieldExtCustomizerDemoReact mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: FieldExtCustomizerDemoReact unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {

    const myStyles = {
      color: 'white',
      width: `${this.props.text}px`,
      background: 'green'
    }

    return (
      <div className={styles.FieldExtCustomizerDemoReact}>
        <div className={styles.cell}>
          <div style={myStyles}>
            { this.props.text }%
          </div>
        </div>
      </div>
    );
  }
}
