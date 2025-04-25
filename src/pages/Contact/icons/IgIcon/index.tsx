import styled from 'styled-components';
import * as colors from '../../../../configs/colors';
import InstagramAppIcon from '../../../../icons/MediaIcons/InstagramAppIcon';

const IgIcon = styled(InstagramAppIcon)`
  width: 30px;
  height: 30px;
  fill: ${colors.primaryColor};

  &:hover {
    fill: ${colors.tertiaryColor};
  }
`;

export default IgIcon;
