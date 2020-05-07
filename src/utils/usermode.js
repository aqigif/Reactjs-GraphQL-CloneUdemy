const usermode = () => {
  const userMode = localStorage.getItem('userMode');
  if (userMode === 'instructor') {
    return true;
  } else {
    return false;
  }
}

export default usermode;