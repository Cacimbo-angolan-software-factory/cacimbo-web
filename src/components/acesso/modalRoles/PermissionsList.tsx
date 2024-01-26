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

  const handleCheckboxChange = (permissionId: number) => {
    const permission = list.find((p: any) => p.id === permissionId);
    const child = list
      .map((p: any) =>
        p.payload.find((child: any) => child.id === permissionId)
      )
      .filter((child: any) => child !== undefined)[0];
    const parent = list.find((p: any) =>
      p.payload.some((child: any) => child.id === permissionId)
    );

    if (permission && permission.payload) {
      const childIds = permission.payload.map((child: any) => child.id);

      const parentChecked = checkedPermissions.includes(permissionId);

      if (!parentChecked) {
        setCheckedPermissions([
          ...checkedPermissions,
          permissionId,
          ...childIds,
        ]);
      } else {
        setCheckedPermissions(
          checkedPermissions.filter(
            (id: number) => id !== permissionId && !childIds.includes(id)
          )
        );
      }
    } else {
      const childChecked = child && checkedPermissions.includes(child.id);
      const parentChecked =
        permission && checkedPermissions.includes(permissionId);

      if (!childChecked && !parentChecked && child) {
        const uniqueIds = new Set([...checkedPermissions, child.id, parent.id]);
        setCheckedPermissions(Array.from(uniqueIds));
      } else {
        setCheckedPermissions(
          checkedPermissions.filter((id: number) => id !== child.id)
        );
      }
    }
  };

  return (
    <div>
      {list.map((permission: any, index: number) => (
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
