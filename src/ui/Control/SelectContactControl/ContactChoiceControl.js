import React, { Component } from "react";
import styled from "styled-components";

//component
import ContactItem from "./ContactItem";
import ContactDropdown from "./ContactDropdown";

//data
import { choiceOption } from "../../../data/data";
import DataDropdown from "./DataDropdown";


const Bound = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
  position: relative;
  .control-title {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: 0.1px;
    color: #484a5d;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  .contact-control {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 15px;
  }
  .contact-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
  }
`;


/**
 * typeChoice : {
 *  Contact: 0,
 *  Bank: 1,
 *  Branch: 2
 * }
 */

export default class ContactChoiceControl extends Component {
  indexChoice = 0;
  state = {
    typeChoice: choiceOption.Contact,
    isShowContactDropdown: false,
    users: this.props.users ? this.props.users : []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.typeChoice && nextProps.typeChoice !== prevState.typeChoice) {
      return {
        typeChoice: nextProps.typeChoice
      }
    }
    return null;
  }



  renderControlItem() {
    let { isMultiple } = this.props;
    let { users, typeChoice } = this.state;

    if (isMultiple) {
      let user;
      if (users && users.length > 0) {
        if (users[users.length - 1]) {
          users.push(user);
        }
      } else {
        users.push(user);
      }

      return users.map((data, i) => {
        return (
          <React.Fragment                   key={i}
          >
            {
              typeChoice === choiceOption.Contact ?
                <ContactItem
                  user={data}
                  content="Chọn người nhận"
                  onShowContactDropdown={this.onShowContactDropdown.bind(this, i)}
                />
                : null
            }
          </React.Fragment>
        );
      });
    } else {
    let user
      if (users[0]) {
        user = users[0];
      }
      return <React.Fragment>
        {
          typeChoice === choiceOption.Contact || typeChoice === choiceOption.Bank || typeChoice === choiceOption.Branch ?
            <ContactItem
              user={user}
              type={typeChoice === choiceOption.Contact ? choiceOption.Contact :  typeChoice === choiceOption.Bank ? choiceOption.Bank : choiceOption.Branch}
              content={typeChoice === choiceOption.Contact ? "Chọn người nhận": "Chọn ngân hàng"}
              onShowContactDropdown={this.onShowContactDropdown.bind(this, 0)}
              autoScroll={this.props.autoScroll}
            />
            : null
        }
      </React.Fragment>
    }
  }
  onShowContactDropdown = index => {
    let { isShowContactDropdown } = this.state;
    this.indexChoice = index;
    this.setState({ isShowContactDropdown: !isShowContactDropdown });
  }




  onChoiceUser = (user) => {
    if (user) {
        let { isMultiple } = this.props
        let { users } = this.state
        if (isMultiple) {
            if (users && users.length > 0) {
                for (let i = 0; i < users.length; i++) {
                    if (users[i]) {
                        if (users[i].id === user.id) {
                            return;
                        }
                    }
                }
            }
        }
        users[this.indexChoice] = user
        this.setState({ users, isShowContactDropdown: false })
        this.props.onChange(users)
    }
}
onCloseDropdown = () => {
    this.setState({ isShowContactDropdown: false })
}





  render() {
    let { title, margin } = this.props;
    let { isShowContactDropdown, users, typeChoice } = this.state;

    return (
        <Bound margin={margin}>
        <p className="control-title">{title}</p>
        <div className="contact-control">
          {this.renderControlItem()}
        </div>
        {isShowContactDropdown && (

          <React.Fragment>
            {typeChoice === choiceOption.Bank || typeChoice === choiceOption.Branch ?
              <DataDropdown
                data={this.props.data}
                type={typeChoice === choiceOption.Contact ? choiceOption.Contact :  typeChoice === choiceOption.Bank ? choiceOption.Bank : choiceOption.Branch}
                usersChoise={users}
                onChoiceUser={this.onChoiceUser}
                onClose={this.onCloseDropdown}
              />
              : typeChoice === choiceOption.Contact ?
              <ContactDropdown
                usersChoise={users}
                onChoiceUser={this.onChoiceUser}
                onClose={this.onCloseDropdown}
              />
              : null
            }
          </React.Fragment>
        )}
      </Bound>
    );
  }
}