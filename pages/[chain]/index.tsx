// src/pages/ages/[chain]/index.tsx
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Text, Flex, Box } from 'components/primitives';
import CustomView from '../../../components/CustomView'; // Adjust the import path as needed

const ChainPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ /* props if any */ }) => {
  return (
    <div>
      <CustomView />
      {/* Other components can be added here if needed */}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Fetch any necessary data for the page if needed
  return {
    props: {
      // Your props here
    },
  };
};

export default ChainPage;
