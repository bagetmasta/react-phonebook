import { Box, Link, Typography } from '@mui/material';

export const ForgotPasswordPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '77.7vh',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1 1 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          borderRadius: '3px',
          p: '13px',
          boxShadow: theme => theme.shadows[2],
        }}
      >
        <Typography
          sx={{
            fontFamily:
              ' -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            lineHeight: '18.4px',
            fontSize: '16px',
          }}
        >
          Постарайтесь вспомнить Ваш пароль и
        </Typography>
        <Link sx={{ ml: '5px' }} href="/login">
          попробуйте еще раз!
        </Link>
      </Box>
    </Box>
  );
};
