const Search = document.getElementById("search");
const checkSearch = () => {

  var valid = false;

  const min = 1,
  max = 25;

  const searchValue = Search.value.trim();

  if (!isRequired(searchValue)) {
    showError(Search, 'Search Bar cannot be blank.');
  } else if (!isBetween(searchValue.length, min, max)) {
    showError(Search)
  } else {
    showSuccess(Search);
    valid = true;
  }
  return valid;
};
const isRequired = value => value === '' ? false: true;
const isBetween = (length, min, max) => length < min || length > max ? false: true;
const showError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('has-success');
  formField.classList.add('has-error');
};
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('has-error');
  formField.classList.add('has-success');
}
 function verify() {
    // validate fields
    var isSearchValid = checkSearch();
    var isFormValid = isSearchValid;
    if (isFormValid) {
    return true;
    } else {
      return false;
    }
  }
