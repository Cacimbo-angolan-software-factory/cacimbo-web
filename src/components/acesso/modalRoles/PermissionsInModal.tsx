import React, { useEffect } from 'react';
import Spinner from '../../spinner/Spinner';

// import { Container } from './styles';

interface PermissionsInModalProps {
  permission: any;
  value: any;
  setValue: any;
  isLoading: boolean;
}

const PermissionsInModal: React.FC<PermissionsInModalProps> = ({
  permission,
  value,
  setValue,
  isLoading,
}) => {
  useEffect(() => {
    console.log(permission);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div key={permission.id}>
          <input
            type='checkbox'
            name={permission.name}
            id={permission.id}
            value={permission.id}
            onChange={(e) => {
              if (e.target.checked) {
                setValue({
                  ...value,
                  permissions: [...value.permissions, permission.id],
                });
              }
            }}
          />
          <label htmlFor={permission.id}>
            {permission.description} - {permission.source_name}
          </label>
        </div>
      )}
    </>
  );
};

export default PermissionsInModal;
