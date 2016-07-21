import React from 'react';
import Index from './Index';
import ImageDemo from './ImageDemo';
import SubscriptionsDemo from './SubscriptionsDemo';
import ListDemo from './ListDemo';
import ListLoader from './ListLoader';
import StackDemo from './StackDemo';
import Stack from '../lib/Stack';
import StackLoader from '../lib/StackLoader';

export default () => (
  <Stack indexKey='path'>
    <Index index='' />
    <ImageDemo index='image' />
    <SubscriptionsDemo index='subscription' />
    <ListDemo index='list' />
    <StackDemo index='stack' />

    <StackLoader index="super-list-loader">
      <ListDemo index='main' />
      <ListLoader index='loading' />
      <ListLoader index='error' />
    </StackLoader>
  </Stack>
);
