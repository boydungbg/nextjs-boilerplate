import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/config/theme';
// import SnackbarLayout from '@/themes/layouts/SnackBarLayout';
// import { CssBaseline, GlobalStyles } from '@mui/material';

// const cache = createCache({ key: 'css' });
export default function RootLayout(props: { children: React.ReactElement }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            {/* <GlobalStyles
              styles={{
                html: {
                  fontSize: '62.5%',
                  width: '100%',
                  height: '100%',
                },
                body: {
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                },
              }}
            /> */}
            {/* <CssBaseline /> */}
            {props.children}
            {/* <SnackbarLayout>{}</SnackbarLayout> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
