import { render } from '@testing-library/react'
import { expectTypeOf } from 'vitest';
import { Page } from '../index.page'

test('index page', () => {
  const { getByText } = render(<Page />);

  expectTypeOf(getByText('Index Page')).not.toBeNull();
})