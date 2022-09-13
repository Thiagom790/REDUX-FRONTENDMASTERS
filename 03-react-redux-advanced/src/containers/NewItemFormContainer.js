import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

// const mapDispatchToProps = (dispatch) => {
//   // Posso fazer dessa forma caso eu queira
//   //   return {onSubmit: (name, price) => dispatch(addNewItem(name, price))};
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };

// Casso eu tenha um component mais simples eu posso fazer isso
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

// O primeiro argumento é o mapStateToProps e o segundo é o mapDispatchToProps
export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
