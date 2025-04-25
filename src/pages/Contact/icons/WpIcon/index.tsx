import styled from 'styled-components';
import WhatsAppIcon from '../../../../icons/MediaIcons/WhatsAppIcon';
import * as colors from '../../../../configs/colors';
import { ContactInfoLink } from '../../styled';

const WpIcon = styled(WhatsAppIcon)`
  width: 30px;
  height: 30px;
  color: ${colors.primaryColor};
  transition: all 0.3s;

  ${ContactInfoLink}:hover & {
    color: ${colors.tertiaryColor};
  }
`;

export default WpIcon;
