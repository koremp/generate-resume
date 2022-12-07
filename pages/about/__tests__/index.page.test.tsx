import { render } from '@testing-library/react'
import { expectTypeOf } from 'vitest';
import { Page } from '../index.page'

test('about  page', () => {
  const { getByText } = render(<Page />);

  expectTypeOf(getByText('About Page')).not.toBeNull();
})