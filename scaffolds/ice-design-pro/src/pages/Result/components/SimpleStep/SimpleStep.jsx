import React, { Component } from 'react';
import IceContainer from '@alifd/ice-container';
import { Step, Button } from '@alifd/next';

const { Item: StepItem } = Step;
const { Group: ButtonGroup } = Button;

export default class SimpleStep extends Component {
  static displayName = 'SimpleStep';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 2,
    };
  }

  next = () => {
    const s = this.state.currentStep + 1;

    this.setState({
      currentStep: s > 3 ? 3 : s,
    });
  };

  prev = () => {
    const s = this.state.currentStep - 1;

    this.setState({
      currentStep: s < 0 ? 0 : s,
    });
  };

  onClick = (currentStep) => {
    console.log(currentStep);

    this.setState({
      currentStep,
    });
  };

  render() {
    const { currentStep } = this.state;

    return (
      <IceContainer title="步骤条">
        <Step current={currentStep}>
          <StepItem title="填写合作需求" onClick={this.onClick} />
          <StepItem title="需求确认，支付费用" onClick={this.onClick} />
          <StepItem title="系统派单" onClick={this.onClick} />
        </Step>
        <div style={styles.buttonGroup}>
          <ButtonGroup>
            <Button
              onClick={this.prev}
              type="primary"
              disabled={currentStep === 0}
            >
              上一步
            </Button>
            <Button
              onClick={this.next}
              type="primary"
              disabled={currentStep === 3}
            >
              下一步
            </Button>
          </ButtonGroup>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0 20px',
  },
};
