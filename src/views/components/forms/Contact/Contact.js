import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import { FormattedMessage } from 'react-intl';
import * as Yup from 'yup';
import { Button, InputGroup, Input } from 'reactstrap';
import deepEqual from 'lodash.isequal';
import ErrorMessageIntl from 'views/components/custom/Messages/Error/ErrorMessageIntl';
import api from 'services/api';
import { withRouter } from 'react-router-dom';

class Contact extends Component {  
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <Formik 
                initialValues={{
                    name: '',
                    message: '',
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                    .max(255, 'error.max')
                    .required('error.required'),
                    message: Yup.string()
                    .max(255, 'error.max')
                    .required('error.required')
                })}
                onSubmit={(values, { setErrors, setSubmitting }) => {
                    api.post('/somewhereapiaction', values)
                        .then(response => {
                            console.log(response);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        .finally(() => {
                            console.log('finished')
                        })
                }}
                render={props => {
                    const {
                        values,
                        errors,
                        initialValues,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    } = props;
                    const hasChanged = !deepEqual(values, initialValues);
                    const hasErrors = Object.keys(errors).length > 0;
                    return (
                        <Form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <FormattedMessage id="label.name" className="col-5">
                                    {placeholder => 
                                    <Input 
                                        type="text" 
                                        id="name" 
                                        value={values.name} 
                                        placeholder={placeholder} 
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        autoComplete='false'
                                        className={hasChanged && errors.name ? ('input-error') : ('') }
                                    />}
                                </FormattedMessage>   
                                {errors.name ? 
                                    (<ErrorMessageIntl intlID={errors.name} className={'txt-error'} />) : (null)
                                }
                            </div>
                            
                            <div className="mb-3">
                                <FormattedMessage id="label.message" className="col-5">
                                    {placeholder => 
                                    <Input 
                                        type="text" 
                                        id="message" 
                                        value={values.message} 
                                        placeholder={placeholder} 
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        autoComplete='false'
                                        className={hasChanged && errors.message ? ('input-error') : ('') }
                                    />}
                                </FormattedMessage>    
                                {errors.message ? 
                                    (<ErrorMessageIntl intlID={errors.message} className={'txt-error'} />) : (null)
                                }   
                            </div>                

                            <InputGroup className="d-flex justify-content-center my-3">
                                <Button type="submit" disabled={!hasChanged || hasErrors || isSubmitting} color="primary" className="px-5">
                                    <FormattedMessage id="label.send" />
                                </Button>
                            </InputGroup>             
                        </Form>
                    )
                }}
            />
        )
    }
}

export default withRouter(Contact);