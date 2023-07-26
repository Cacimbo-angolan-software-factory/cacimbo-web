import React, { useEffect, useState } from 'react';
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
  const [checkedPermissions, setCheckedPermissions] = useState<any>([]);

  const handleCheckboxChange = (permissionId: any) => {
    if (checkedPermissions.includes(permissionId)) {
      // Remove the permission from the list if it's already checked
      setCheckedPermissions((prevChecked: any) =>
        prevChecked.filter((id: any) => id !== permissionId)
      );
    } else {
      // Add the permission to the list if it's checked
      setCheckedPermissions((prevChecked: any) => [
        ...prevChecked,
        permissionId,
      ]);
    }
  };

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
            checked={value.permissions.includes(permission.id)}
            onChange={() => handleCheckboxChange(permission.id)}
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
