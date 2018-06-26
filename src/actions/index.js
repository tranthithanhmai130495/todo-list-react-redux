export const actCloseForm = () => {
	return {
		'type': 'CLOSE_FORM'
	}
}

export const actOpenForm = () => {
	return {
		'type': 'OPEN_FORM'
	}
}

export const actToggleForm = () => {
	return {
		'type': 'TOGGLE_FORM'
	}
}

export const actSort = (orderBy, orderDir) => {
  return {
    type: 'SORT_ITEM',
    orderBy: orderBy,
    orderDir: orderDir
  }
}