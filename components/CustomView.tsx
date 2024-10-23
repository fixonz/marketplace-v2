// src/components/CustomView.tsx
import React from 'react';
import ItemsTab from './collections/TokenCard'; // Adjust the import path as needed
import ConnectWalletButton from './navbar/Wallet'; // Adjust the import path as needed
import { useCollections } from '@reservoir0x/reservoir-kit-ui';
import { Text, Flex, Box } from 'components/primitives';
import { useMarketplaceChain } from 'hooks';

const CustomView = () => {
  const marketplaceChain = useMarketplaceChain();
  const { data: collections } = useCollections({ limit: 3, sortBy: '1DayVolume', includeTopBid: true });

  return (
    <Flex direction="column" align="center" mb={4}>
      <Text as="h1">Collections</Text>
      <Flex wrap="wrap" justify="center" mb={4}>
        {collections?.map((collection) => (
          <Box key={collection.id} mr={4}>
            {collection.name}
          </Box>
        ))}
      </Flex>
      <ItemsTab />
      <ConnectWalletButton />
    </Flex>
  );
};

export default CustomView;
