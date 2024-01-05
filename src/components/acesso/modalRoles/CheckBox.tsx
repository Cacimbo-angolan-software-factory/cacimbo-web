import React, { useLayoutEffect, useRef } from 'react';
import { status } from './Constants';

// import { Container } from './styles';
interface IProps {
  id: any;
  name: string;
  handleChange: (permissionId: number) => void;
  checkedPermissions: any;
}

const CheckBox: React.FC<IProps> = ({
  id,
  name,
  handleChange,
  checkedPermissions,
}) => {
  const inputRef = useRef<any>(null);

  return (
    <input
      ref={inputRef}
      name={name}
      type='checkbox'
      checked={checkedPermissions.includes(id)}
      onChange={() => handleChange(id)}
    />
  );
};

export default CheckBox;
