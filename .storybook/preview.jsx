import { useState, useEffect } from 'react';
import addons from '@storybook/addons';

const channel = addons.getChannel();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      // listen to DARK_MODE event
      channel.on('DARK_MODE', setDarkMode);
      return () => channel.off('DARK_MODE', setDarkMode);
    }, [channel, setDarkMode]);

    return (
      <div data-theme={darkMode ? 'dark' : 'light'}>
        <Story />
      </div>
    );
  },
];
