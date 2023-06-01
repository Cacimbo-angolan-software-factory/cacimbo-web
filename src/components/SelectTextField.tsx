import { FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

interface SelectInputProps {
  children: React.ReactNode;
  value: string;
  handleChange: any;
  labelName: string;
  disabled?: boolean;
}

const FormContainer = styled(FormControl)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    background-color: #1d1d1d;
    border-radius: 0.5rem;
    height: 5rem;
    width: 100%;
    &.Mui-focused fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    & fieldset {
      border-color: white;
    }
    & svg {
      color: white;
    }
  }
`;

const SelectInput: React.FC<SelectInputProps> = ({
  children,
  value,
  handleChange,
  labelName,
  disabled,
}) => {
  return (
    <FormContainer
      disabled={disabled}
      sx={{ minWidth: 120, fontSize: '16px', color: 'white' }}
    >
      <InputLabel sx={{ color: 'white' }} id='demo-simple-select-helper-label'>
        {labelName}
      </InputLabel>
      <Select
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        value={value}
        label={labelName}
        onChange={handleChange}
        sx={{
          width: '50%',
          color: 'white',
          paddingLeft: '20px',
          fontSize: '1.4rem',
        }}
      >
        {children}
      </Select>
    </FormContainer>
  );
};

export default SelectInput;
