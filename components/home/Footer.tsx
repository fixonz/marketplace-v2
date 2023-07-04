import { FC } from 'react'
import { Text, Box, Flex, Anchor, Button } from '../primitives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

type SectionTitleProps = {
  title: string
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => (
  <Text style="subtitle1" css={{ color: '$gray12', mb: 8 }}>
    {title}
  </Text>
)

type SectionLinkProps = {
  name: string
  href: string
}

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
)

const developerSectionLinks = [
  {
    name: 'RockFi Thread',
    href: 'https://twitter.com/Rockfiio/status/1675880357592219648?s=20',
  },
  {
    name: 'Whitepaper',
    href: 'https://twitter.com/Rockfiio/status/1675880357592219648?s=20',
  },
]

const companySectionLinks = [
  {
    name: 'PepeRock',
    href: 'https://marketplace-v2-ejf2w5ft9-fixonz.vercel.app/ethereum/asset/0xd249a9aad31fcc54e8c352b2063425306ac1f54d:0?tab=info',
  },
  {
    name: 'BlackRock',
    href: 'https://marketplace-v2-ejf2w5ft9-fixonz.vercel.app/ethereum/collection/0x06aa761144a080365a5bb8d15e754c426909d4cf',
  },
  {
    name: 'WhiteRock',
    href: 'https://marketplace-v2-ejf2w5ft9-fixonz.vercel.app/ethereum/collection/0xe886493948aaf795902a6c3b3734df8255b83203',
  },
]

export const Footer = () => {
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
        <SectionTitle title="Join RockFi Community" />
        <Flex css={{ gap: '$4', mt: 16 }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Rockfiio"
          >
            <Button size="xs" color="gray3">
              <FontAwesomeIcon icon={faTwitter} width={14} height={14} />
            </Button>
          </a>
        </Flex>
      </Flex>
    </Flex>
  )
}
