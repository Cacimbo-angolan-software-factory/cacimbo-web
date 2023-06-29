import React from 'react';
import Spinner from '../../spinner/Spinner';
import { PermissionsDiv } from './criarUsuarioStyles';
import { IoInformationCircleOutline } from 'react-icons/io5';

// import { Container } from './styles';

interface RolesModalProps {
  role: any;
  value: any;
  setValue: any;
  loadingRoles: boolean;
  getDesc: any;
}

const RolesModal: React.FC<RolesModalProps> = ({
  role,
  value,
  setValue,
  loadingRoles,
  getDesc,
}) => {
  const [showChildren, setShowChildren] = React.useState(false);
  const [selectedPermissions, setSelectedPermissions] = React.useState<any>({});

  return (
    <>
      {loadingRoles ? (
        <Spinner />
      ) : (
        <>
          <div className='rolesDiv' key={role.id}>
            <input
              type='checkbox'
              name={role.name}
              id={role.id}
              value={role.id}
              onChange={(e) => {
                if (e.target.checked) {
                  setValue({
                    ...value,
                    roles: [...value.roles, role.id],
                  });
                } else {
                  setValue({
                    ...value,
                    roles: value.roles.filter((role: any) => role !== role.id),
                  });
                }
              }}
            />
            <label
              onClick={() => setShowChildren(!showChildren)}
              htmlFor={role.id}
            >
              {role.name}
            </label>
          </div>

          {showChildren && (
            <PermissionsDiv>
              {role.permissions.map((permission: any) => (
                <>
                  {permission.name !== '' && (
                    <div className='parent' key={permission.id}>
                      <IoInformationCircleOutline />
                      <p>{permission.name}</p>
                      {getDesc(permission?.name)}
                    </div>
                  )}

                  {permission.name === '' &&
                    permission.youCan.map((item: any) => {
                      return (
                        <div className='parent' key={item}>
                          <IoInformationCircleOutline />
                          <p>{item}</p>
                        </div>
                      );
                    })}
                </>
              ))}
            </PermissionsDiv>
          )}
        </>
      )}
    </>
  );
};

export default RolesModal;
