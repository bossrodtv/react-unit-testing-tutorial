import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Sidebar } from './sidebar';

function renderComponentUnderTest() {
  const mockAvatar = <div aria-label="mock-avatar">Test</div>;
  const view = render(<Sidebar avatar={mockAvatar} />);

  const elements = {
    getAvatar: () => screen.getByLabelText('mock-avatar'),
    queryAvatar: () => screen.queryByLabelText('mock-avatar'),
    getMenus: () => screen.getByLabelText('menus'),
    queryMenus: () => screen.queryByLabelText('menus'),
  };

  return {
    elements,
    ...view,
  };
}

describe(Sidebar.name, () => {
  it('should renders the sidebar correctly', () => {
    const { elements } = renderComponentUnderTest();

    expect(elements.getAvatar()).toBeInTheDocument();
    expect(elements.getMenus()).toBeInTheDocument();
  });
});
