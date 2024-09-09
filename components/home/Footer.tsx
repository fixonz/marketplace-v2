import { FC } from 'react';
import { Text, Box, Flex, Anchor, Button } from '../primitives'; // Ensure these are correct imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import PreviewButton from '../PreviewButton'; // Import the PreviewButton

// Define the SectionTitle component
type SectionTitleProps = {
  title: string;
};

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <Text style="subtitle1" css={{ color: '$gray12', mb: 8 }}>
    {title}
  </Text>
);

// Define the SectionLink component
type SectionLinkProps = {
  name: string;
  href: string;
};

const SectionLink: FC<SectionLinkProps> = ({ name, href }) => (
  <Anchor
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    weight="medium"
    css={{ fontSize: 14, mt: 16 }}
  >
    {name}
  </Anchor>
);

// Define links for the developer section
const developerSectionLinks = [
  {
    name: 'OKINA Labs',
    href: 'https://x.com/okinalabs',
  },
  {
    name: '#xmakeitmerch',
    href: 'https://xmerch.xyz',
  },
];

// Define links for the company section
const companySectionLinks = [
  {
    name: 'SteezyApeGang',
    href: 'https://marketplace-v2-khaki.vercel.app/ethereum/collection/0x70789e18a75611a9516d6251d650d096740a9e07',
  },
  {
    name: 'HMN5',
    href: 'https://marketplace-v2-khaki.vercel.app/ethereum/collection/0x32fc5bcabc1f78308be11754493c49116c0fa35f',
  },
  {
    name: 'SteezyGenesis',
    href: 'https://marketplace-v2-khaki.vercel.app/ethereum/collection/0x83296c35ac338ed6c4ab7db1bb3d6ca90ae3b9c7',
  },
];

// Define the Footer component
const Footer: FC = () => {
  return (
    <Flex
      justify="between"
      css={{
        borderTop: '1px solid $gray7',
        borderStyle: 'solid',
        pt: '$5',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 36,
        '@bp600': {
          flexDirection: 'row',
          gap: 0,
        },
      }}
    >
      <Flex css={{ gap: 80, '@bp600': { gap: 136 } }}>
        <Flex direction="column">
          <SectionTitle title="Info" />
          {developerSectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
        <Flex direction="column">
          <SectionTitle title="Other" />
          {companySectionLinks.map((props) => (
            <SectionLink key={props.name} {...props} />
          ))}
        </Flex>
      </Flex>
      <Flex
        direction="column"
        css={{ alignItems: 'flex-start', '@bp600': { alignItems: 'flex-end' } }}
      >
        <SectionTitle title="Join OKINA LABS Community" />
        <Flex css={{ gap: '$4', mt: 16 }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/okinalabs"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faTwitter} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/invite/your-invite-link"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faDiscord} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/your-instagram-handle"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faInstagram} width={14} height={14} />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/your-telegram-channel"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faTelegram} width={14} height={14} />
            </Button>
          </a>
        </Flex>
        {/* Add the PreviewButton here */}
        {process.env.NODE_ENV === 'development' && <PreviewButton />}
      </Flex>
    </Flex>
  );
};

export default Footer;
