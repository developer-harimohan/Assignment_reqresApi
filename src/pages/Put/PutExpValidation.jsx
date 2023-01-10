import * as yup from 'yup';

//schema for form validation

let schema = yup.object().shape({
    name: yup.string(),
    job: yup.string()
});
export default schema