import React, { useState } from 'react';

import { Permission, Permissions, RoleContainer } from './acessoRolesStyles';
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoCloseCircleOutline,
} from 'react-icons/io5';

interface RoleProps {
  role: any;
}

const Role: React.FC<RoleProps> = ({ role }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpandedYouCan, setIsExpandedYouCan] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState<any>({});

  const sortedPermissions = [...role.permissions].sort((a, b) => {
    if (a.name !== '' && b.name === '') return -1;
    if (a.name === '' && b.name !== '') return 1;
    return 0;
  });

  const handleClick = () => {
    setIsExpandedYouCan(!isExpandedYouCan);
  };

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
                  <section
                    className={isExpandedYouCan ? 'active' : ''}
                    onClick={handleClick}
                  >
                    <div>
                      {isExpandedYouCan ? (
                        <IoRemoveCircleOutline />
                      ) : (
                        <IoAddCircleOutline />
                      )}
                    </div>
                    <div className='block'>
                      <p>{permission.name}</p>
                    </div>
                  </section>

                  {isExpandedYouCan &&
                    permission.youCan.map(
                      (youCanItem: any, subIndex: number) => (
                        <div key={subIndex} className='small'>
                          <IoCloseCircleOutline />
                          <p>{youCanItem}</p>
                        </div>
                      )
                    )}
                </Permission>
              )}
              {permission.name === '' &&
                permission.youCan.map((youCanItem: any, subIndex: number) => (
                  <Permission key={subIndex}>
                    <section className='section-2'>
                      {permission.name === '' && <IoCloseCircleOutline />}
                      <div className='block youCan'>
                        <p>{youCanItem}</p>
                      </div>
                    </section>
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
