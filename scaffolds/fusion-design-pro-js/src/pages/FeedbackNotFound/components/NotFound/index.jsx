import React from 'react';
import Exception from './components/Exception';

export default function NotFound() {
  return (
    <Exception
      statusCode="404"
      image="https://img.alicdn.com/tfs/TB14c1VoET1gK0jSZFhXXaAtVXa-200-200.png"
      description="服务器好像挂了你要等会了"
    />
  );
}
