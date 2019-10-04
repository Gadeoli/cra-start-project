import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';

class ErrorMessageIntl extends Component {   
    render() {
        return (
            <span className={this.props.className}>
                <FormattedMessage id={this.props.intlID}>
                    {(...content) => content}
                </FormattedMessage>
            </span>
        )
    }
}

export default ErrorMessageIntl;