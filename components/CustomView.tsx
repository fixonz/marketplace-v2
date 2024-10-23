// src/components/CustomView.tsx
import React from 'react';
import ItemsTab from './collections/TokenCard'; // Adjust the import path as needed
import ConnectWalletButton from './navbar/Wallet'; // Adjust the import path as needed

const CustomView = () => {
  return (
    <div>
      <ItemsTab />
      <ConnectWalletButton />
    </div>
  );
};

export default CustomView;
