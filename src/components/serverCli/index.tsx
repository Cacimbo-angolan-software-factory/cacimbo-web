import {
    IoBusinessOutline,
    IoCalendarOutline,
    IoDocumentTextOutline,
    IoMailUnreadOutline,
    IoPeopleOutline,
    IoPersonAddOutline,
  } from 'react-icons/io5';
  import {
    BiGitPullRequest,
    BiSolidServer,
    BiDesktop
  } from 'react-icons/bi';

import { ICliServer } from "../../pages/admin/servers"
import { 
        Container,
      ContainerHeader,
      Offline, 
      Online,
      ContainerDiv} from './styles';

export type CliServerProps={
    cli:ICliServer
}
export function ServerCli({cli}:CliServerProps){
    return (
        <Container>
            <ContainerHeader>{
            cli.estado === 'online'?<Online>
                <span><IoPeopleOutline /></span>
                </Online>: 
                <Offline>
                <span><IoPeopleOutline /></span>
                </Offline>
            }
          <p>{cli.CompanyName}</p>
        </ContainerHeader>
        <ContainerDiv>
            <div>
                <span><IoDocumentTextOutline /></span>
            </div>
            <p>{cli.CompanyID}</p>
        </ContainerDiv>
        <ContainerDiv>
            <div>
                <span><IoBusinessOutline /></span>
            </div>
            <p>{cli.City}<br/>{cli.AddressDetail}</p>
        </ContainerDiv>
        <ContainerDiv>
            <div>
                <span><IoCalendarOutline/></span>
            </div>
            <p>{cli.data}</p>
        </ContainerDiv>
        <ContainerDiv>
            <div>
                <span>{cli.posto===cli.server?<BiSolidServer color="#fd951f"/>:<BiDesktop/>}</span>
            </div>
            <p>{cli.posto}</p>
        </ContainerDiv>
        <ContainerDiv>
            <div>
                <span><BiGitPullRequest/></span>
            </div>
            <p>{cli.cacimbo_version}</p>
        </ContainerDiv>
        
    </Container >
    )
}