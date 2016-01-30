import classNames from 'classnames'

export const classes = {
  card: classNames('mdl-card', 'mdl-shadow--2dp'),
  cardTitle: classNames('mdl-card__title'),
  cardTitleText: classNames('mdl-card__title-text'),
  cardText: classNames('mdl-card__supporting-text'),
  raisedButton: classNames('mdl-button mdl-js-button', 'mdl-button--raised mdl-button--colored'),
  raisedButtonAccented: classNames('mdl-button', 'mdl-js-button', 'mdl-button--raised', 'mdl-button--accent'),
  iconButton: classNames('mdl-button', 'mdl-js-button', 'mdl-button--icon'),
  addButton: classNames('mdl-button', 'mdl-js-button', 'mdl-button--fab', 'mdl-js-ripple-effect', 'mdl-button--colored'),
  icons: classNames('material-icons'),
  textField: classNames('mdl-textfield', 'mdl-js-textfield'),
  textFieldError: classNames('mdl-textfield__error'),
  input: classNames('mdl-textfield__input'),
  label: classNames('mdl-textfield__label'),
  table: classNames('mdl-data-table', 'mdl-js-data-table'),
  nonNumericTableCell: classNames('mdl-data-table__cell--non-numeric'),
  toggle: classNames('mdl-icon-toggle', 'mdl-js-icon-toggle', 'mdl-js-ripple-effect'),
  toggleInput: classNames('mdl-icon-toggle__input'),
  select: classNames('mdl-menu', 'mdl-menu--bottom-left', 'mdl-js-menu', 'mdl-js-ripple-effect'),
  selectItem: classNames('mdl-menu__item')
}
