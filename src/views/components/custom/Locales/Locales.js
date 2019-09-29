import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { appLocales } from 'locales';
import { FormattedMessage } from 'react-intl';
import { setLocale, getLocale } from 'configs/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Locales extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      toggleColor: this.props.toggleColor ? this.props.toggleColor : 'primary',
      toggleSize: this.props.toggleSize ? this.props.toggleSize : 'sm',
      dropdownOpen: false,
      locales: appLocales(),
      locale: getLocale()
    };
  }

  changeDropLanguage = (e) => {
    const value = e.currentTarget.getAttribute('dropdownvalue');
    setLocale(value);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
  render() {
    return (
      <Dropdown caret isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropdownLang">
        <DropdownToggle caret color={this.state.toggleColor} size={this.state.toggleSize}>
          {this.props.title ? (
            <FormattedMessage id='lang.choose'></FormattedMessage>
          ) : ('')}
          <FontAwesomeIcon icon="globe-americas"/>
        </DropdownToggle>
        <DropdownMenu>
          {
            this.state.locales.map((el) => {
              return (
                <DropdownItem onClick={this.changeDropLanguage} dropdownvalue={el.title} key={el.id}>
                  <img style={style.img} src={el.flag} alt={el.intl}/>
                  <FormattedMessage active id={el.intl}></FormattedMessage>
                </DropdownItem>
              )
            }) 
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const style = {
  dropdown: {

  },
  img: {
    width: "20px",
    height: "20px",
    marginRight: "4px"
  }
}

export default Locales;
