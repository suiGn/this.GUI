// tests/components/UserAvatar.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import UserAvatar from '../../src/components/UserAvatar';

describe('UserAvatar', () => {
  it('should render without crashing', () => {
    render(<UserAvatar />);
  });
});