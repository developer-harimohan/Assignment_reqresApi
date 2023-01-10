import * as yup from 'yup';

//schema for form validation

let schema = yup.object().shape({
    name: yup.string().required('Please Enter Your Name'),
    job: yup.string().required('Please Enter Your Name'),
});
export default schema