import React from 'react';

type buttonProps = {
  btnClass: string | undefined;
};

function Button({ btnClass }: buttonProps) {
  return <button className={btnClass}></button>;
}

export default Button;
