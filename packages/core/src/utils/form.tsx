import jsonpath from 'jsonpath';
import { DeepMap, FieldError, FieldValues } from 'react-hook-form';

export const getFormError = (
  path: string,
  errors: DeepMap<FieldValues, FieldError>,
): string => {
  if (path.indexOf('.') === -1) {
    return errors[path]?.message;
  }
  const messages = jsonpath.query(errors, `$.${path}.message`);
  if (messages && messages.length > 0) {
    return messages[0];
  }
  return 'Please provide a valid input!';
};
