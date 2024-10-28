import Button from '@mui/material/Button';

export function ContactButton() {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        width: '160px',
        height: '35px',
        fontSize: '0.875rem',
        background: 'black',
        borderRadius: '10px',
        textTransform: 'none',
      }}
    >
      Contact us
    </Button>
  );
}
