import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function ContactButton() {
  return (
    <Link to="/contact" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        size="small"
        sx={{
          width: '177px',
          height: '31px',
          fontSize: '0.875rem',
          background: 'black',
          borderRadius: '10px',
          textTransform: 'none',
        }}
      >
        Contact us
      </Button>
    </Link>
  );
}
