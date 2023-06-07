import React, { useState } from 'react';

import { Permission, Permissions, RoleContainer } from './acessoRolesStyles';
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoAddCircleOutline,
} from 'react-icons/io5';

interface RoleProps {
  role: any;
}

const Role: React.FC<RoleProps> = ({ role }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [value, setValue] = useState<any>([]);

  const handleChange = (index: number, subIndex: number, roleIndex: number) => {
    const newValue: any = [...value];
    newValue[roleIndex].permissions[index].youCan[subIndex].checked =
      !newValue[roleIndex].permissions[index].youCan[subIndex].checked;
    setValue(newValue);
  };

  const sortedPermissions = [...role.permissions].sort((a, b) => {
    if (a.name !== '' && b.name === '') return -1;
    if (a.name === '' && b.name !== '') return 1;
    return 0;
  });

  return (
    <RoleContainer>
      <h2 onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        {role.name}
      </h2>
      <p>
        <IoInformationCircleOutline />
        {role.description}
      </p>

      {isExpanded && (
        <Permissions>
          {sortedPermissions.map((permission: any, index: number) => (
            <>
              {permission.name !== '' && (
                <Permission key={index}>
                  <IoAddCircleOutline />
                  <div>
                    <span>
                      <input
                        type='checkbox'
                        id={`switch-permission-${role.id}-${index}`}
                        checked={value[role.id]?.permissions[index]?.checked}
                        onChange={() => handleChange(role.id, index, 0)}
                      />
                      <label htmlFor={`switch-permission-${role.id}-${index}`}>
                        Toggle
                      </label>
                    </span>
                    <p>{permission.name}</p>
                    <button>Editar</button>
                  </div>
                </Permission>
              )}
              {permission.name === '' &&
                permission.youCan.map((youCanItem: any, subIndex: number) => (
                  <Permission key={subIndex}>
                    {permission.name === '' && !(<IoAddCircleOutline />)}
                    <div className='youCan'>
                      <span>
                        <input
                          type='checkbox'
                          id={`switch-youcan-${role.id}-${index}-${subIndex}`}
                          checked={
                            value[role.id]?.permissions[index]?.youCan[subIndex]
                              ?.checked
                          }
                          onChange={() =>
                            handleChange(role.id, index, subIndex)
                          }
                        />
                        <label
                          htmlFor={`switch-youcan-${role.id}-${index}-${subIndex}`}
                        >
                          Toggle
                        </label>
                      </span>
                      <p>{youCanItem}</p>
                      <button>Editar</button>
                    </div>
                  </Permission>
                ))}
            </>
          ))}
        </Permissions>
      )}
    </RoleContainer>
  );
};

export default Role;
