import React, { useEffect, useState } from 'react';

import {
  Overlay,
  Permission,
  Permissions,
  RoleContainer,
  Span,
} from './acessoRolesStyles';
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoCloseCircleOutline,
  IoTrashBinOutline,
  IoEllipsisHorizontalOutline,
} from 'react-icons/io5';
import { descriptionsObj } from '../modalRoles/descriptionsObj';
import OptionsRolesModal from './OptionsRolesModal';
import MessageModalDelete from './MessageModalDelete';

interface RoleProps {
  role: any;
  setRoleSelected: React.Dispatch<any>;
  roleSelected: any;
}

const Role: React.FC<RoleProps> = ({ role, roleSelected, setRoleSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState<any>({});
  const [openModal, setOpenModal] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [openMessageModal, setOpenMessageModal] = useState(false);

  // const sortedPermissions = [...role.permissions].sort((a, b) => {
  //   if (a.name !== '' && b.name === '') return -1;
  //   if (a.name === '' && b.name !== '') return 1;
  //   return 0;
  // });

  const handleMenuClick = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setOpenModal(!openModal);
    setRoleSelected(role);
  };

  return (
    <>
      <RoleContainer>
        <div>
          <h2 onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            {role.name}
          </h2>
          <Span onClick={(event) => handleMenuClick(event)}>
            <IoEllipsisHorizontalOutline />
          </Span>
        </div>

        <p>
          <IoInformationCircleOutline />
          {role.description}
        </p>

        {isExpanded && (
          <Permissions>
            {role.permissions.map((permission: any, index: number) => (
              <>
                {permission.name !== '' && (
                  <Permission key={index}>
                    <section
                      className={
                        selectedPermissions[permission.name] ? 'active' : ''
                      }
                      onClick={() => {
                        setSelectedPermissions({
                          ...selectedPermissions,
                          [permission.name]:
                            !selectedPermissions[permission.name],
                        });
                      }}
                    >
                      <div>
                        {selectedPermissions[permission.name] ? (
                          <IoRemoveCircleOutline />
                        ) : (
                          <IoAddCircleOutline />
                        )}
                      </div>
                      <div className='block'>
                        <p>{permission.name}</p>
                        <IoTrashBinOutline className='delete' />
                      </div>
                    </section>

                    {selectedPermissions[permission.name] &&
                      permission.youCan.map(
                        (youCanItem: any, subIndex: number) => (
                          <div key={subIndex} className='small'>
                            <IoCloseCircleOutline />
                            {/* <p>{descriptionsObj[youCanItem.toUpperCase()]}</p> */}
                            <p>{youCanItem}</p>

                            <IoTrashBinOutline className='delete' />
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
                          {/* <p>{descriptionsObj[youCanItem.toUpperCase()]}</p> */}
                          <p>{youCanItem}</p>

                          <IoTrashBinOutline className='delete' />
                        </div>
                      </section>
                    </Permission>
                  ))}
              </>
            ))}
          </Permissions>
        )}
      </RoleContainer>

      {openModal && (
        <OptionsRolesModal
          openMessageModal={openMessageModal}
          setOpenMessageModal={setOpenMessageModal}
          roleSelected={roleSelected}
          position={position}
        />
      )}

      {openMessageModal && (
        <MessageModalDelete
          roleSelected={roleSelected}
          setOpenMessageModal={setOpenMessageModal}
        />
      )}

      {openMessageModal && <Overlay />}
    </>
  );
};

export default Role;
