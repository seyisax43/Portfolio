import MenuIcon from '@mui/icons-material/Menu';

function toggleButton({setOpen}) {
  return (
      <button className="toggleButton" onClick={() => setOpen(prev => !prev)}>
        <MenuIcon />
          
 </button>
  )
}

export default toggleButton