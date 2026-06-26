import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/core/theme/config';

export const ThemeScript = () => {
  const script = `
    (function () {
      try {
        var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
        var theme = stored === 'portfolio' || stored === 'portfolio-light'
          ? stored
          : '${DEFAULT_THEME}';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', '${DEFAULT_THEME}');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};
