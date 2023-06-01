import React from 'react';
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Checkbox,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styled from 'styled-components';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FormContainer = styled(FormControl)`
  & .MuiFormLabel-root {
    color: white;
  }

  & #demo-multiple-checkbox {
    color: white;
    font-size: 1.3rem;
    width: 90%;
    /* padding-right: 5rem; */
  }

  & label.Mui-focused {
    color: white;
  }
  & label.Mui-active {
    padding-right: 5px;
  }
  & .MuiOutlinedInput-root {
    background-color: #1d1d1d;
    border-radius: 0.5rem;
    height: 5rem;
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

interface CheckMarkFieldProps {
  children: React.ReactNode;
  value: string[];
  handleChange: (event: SelectChangeEvent<string[]>) => void;
  tag: string;
  disabled?: boolean;
}

const CheckMarkField: React.FC<CheckMarkFieldProps> = ({
  children,
  value,
  handleChange,
  tag,
  disabled,
}) => {
  return (
    <div>
      <FormContainer disabled={disabled} sx={{ maxWidth: '50%' }}>
        <InputLabel id='demo-multiple-checkbox-label'>{tag}</InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={tag} />}
          renderValue={(selected) => (selected as any).join(', ')}
          MenuProps={MenuProps}
        >
          {children}
        </Select>
      </FormContainer>
    </div>
  );
};

export default CheckMarkField;
