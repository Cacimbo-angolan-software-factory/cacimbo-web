import React, { useCallback, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { PerSection, Section } from './modalRolesStyles';
import CheckBox from './CheckBox';

interface IProps {
  checkedPermissions: any;
  setCheckedPermissions: any;
  list: any;
}

const PermissionsList: React.FC<IProps> = ({
  checkedPermissions,
  list,
  setCheckedPermissions,
}) => {
  const [openPermissions, setOpenPermissions] = React.useState(
    new Array(list.length).fill(false)
  );

  const handlePermissionToggle = (index: number) => {
    const updatedPermissions = [...openPermissions];
    updatedPermissions[index] = !updatedPermissions[index];
    setOpenPermissions(updatedPermissions);
  };

  // Function to handle the change event of a checkbox associated with a specific permission
  const handleCheckboxChange = (permissionId: number) => {
    // Find the permission object in the list that matches the given permissionId
    const permission = list.find((p: any) => p.id === permissionId);

    // Find a child object in the list whose id matches the given permissionId
    const child = list
      .map((p: any) =>
        p.payload.find((child: any) => child.id === permissionId)
      )
      .filter((child: any) => child !== undefined)[0];

    // Find the parent object in the list whose payload contains a child with the given permissionId
    const parent = list.find((p: any) =>
      p.payload.some((child: any) => child.id === permissionId)
    );

    // If the permission object exists and has children (payload)
    if (permission && permission.payload) {
      // Extract the ids of all child permissions
      const childIds = permission.payload.map((child: any) => child.id);

      // Check if the parent permission is currently checked
      const parentChecked = checkedPermissions.includes(permissionId);

      if (!parentChecked) {
        // If the parent permission is not checked, check the parent and all its children
        setCheckedPermissions([
          ...checkedPermissions,
          permissionId,
          ...childIds,
        ]);
      } else {
        // If the parent permission is already checked, uncheck the parent and all its children
        setCheckedPermissions(
          checkedPermissions.filter(
            (id: number) => id !== permissionId && !childIds.includes(id)
          )
        );
      }
    } else {
      // If the permission does not have children or is a child permission
      const childChecked = child && checkedPermissions.includes(child.id);
      const parentChecked =
        permission && checkedPermissions.includes(permissionId);

      if (!childChecked && !parentChecked && child) {
        // If neither the child nor parent is checked, and the permission is a child, check both
        const uniqueIds = new Set([...checkedPermissions, child.id, parent.id]);
        setCheckedPermissions(Array.from(uniqueIds));
      } else {
        // If either the child or parent is checked, uncheck the child
        setCheckedPermissions(
          checkedPermissions.filter((id: number) => id !== child.id)
        );
      }
    }
  };

  return (
    <div>
      {list.length &&
        list.map((permission: any, index: number) => (
          <div key={index}>
            <PerSection>
              <IoAddCircleOutline
                className='svg'
                onClick={() => handlePermissionToggle(index)}
              />
              <label>
                <p>{permission.name}</p>
                <CheckBox
                  handleChange={handleCheckboxChange}
                  id={permission.id}
                  name={permission.name}
                  checkedPermissions={checkedPermissions}
                />
              </label>
            </PerSection>

            {openPermissions[index] && (
              <Section>
                {permission.payload.map((paychild: any) => (
                  <label key={paychild.id}>
                    <CheckBox
                      handleChange={handleCheckboxChange}
                      id={paychild.id}
                      name={paychild.name}
                      checkedPermissions={checkedPermissions}
                    />
                    <p>{paychild.name}</p>
                  </label>
                ))}
              </Section>
            )}
          </div>
        ))}
    </div>
  );
};

export default PermissionsList;
