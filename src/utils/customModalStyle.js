export const customStyles = (mobile) => ({
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
		width: mobile && '80%',
		height: mobile && '60%'
    },
});