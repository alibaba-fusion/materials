import * as React from 'react';
import './index.scss';

type ComponentProps = {
  title: string,
};

export default function IcestarkModule(props: ComponentProps) {
  const { type, ...others } = props;

  return (
    <div className="icestark-module-example" {...others}>Hello IcestarkModule</div>
  );
}
