export const getHandledError = (error, touched) => (touched ? error : '');

export const getErrorStyling = (error, touched) =>
  `form-group ${touched && error ? 'has-danger' : ''}`;

export const getTitleError = title =>
  !title ? 'Please enter a title' : undefined;

export const getCategoriesError = categories =>
  !categories ? 'Please enter some categories' : undefined;

export const getContentError = content =>
  !content ? 'Please enter some content' : undefined;
