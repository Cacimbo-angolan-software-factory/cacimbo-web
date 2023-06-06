import React, { useState } from 'react';

import { RoleContainer } from './acessoRolesStyles';
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
} from 'react-icons/io5';

interface RoleProps {
  role: any;
}

const Role: React.FC<RoleProps> = ({ role }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div>
          <h3>Permissões</h3>
        </div>
      )}
    </RoleContainer>
  );
};

export default Role;
