import request from 'graphql-request';
import { GRAPHQL_QUERY } from '../../graphql/queries';
import tarkov from '.';

// eslint-disable-next-line import/prefer-default-export
export const loadMaps = {
  EFT: () => {
    const data = request(tarkov.graphqlURL, GRAPHQL_QUERY, {});
    return data;
  },
};
