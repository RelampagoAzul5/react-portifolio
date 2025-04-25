import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

import GithubIcon from '../../../../icons/MediaIcons/GithubIcon';

const GhIcon = styled(GithubIcon)`
  width: 30px;
  height: 30px;
  fill: ${colors.primaryColor};

  &:hover {
    fill: ${colors.tertiaryColor};
  }
`;

export default GhIcon;
