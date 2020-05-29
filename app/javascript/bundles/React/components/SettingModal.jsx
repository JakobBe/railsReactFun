import React from 'react';
import ReactModal from 'react-modal';

class SettingModal extends React.Component {

  getGroupCheckboxes = (groups) => {
    return (
      <div className="setting-modal__groups-wrapper u-margin-bottom-medium">
        {groups.map(group => {
          // console.log(group.name, group.status);
          return (
            <div className="setting-modal__checkbox">
              <div className="setting-modal__checkbox-label">
                {group.name}
              </div>
              <input
                name={group.name}
                type="checkbox"
                checked={group.status}
                onChange={() => group.onChange(group.name)}
              />
            </div>
          );
        })   
        }
      </div>
    );
  }

  getCycleInfoSelects = (cycleInfos) => {
    return (
      <div className="setting-modal__cycle-wrapper">
        {cycleInfos.map(info => {
          return (
            <div className="setting-modal__cycle-select">
              <div>{info.label}</div>
              <select name={info.name} value={info.value} onChange={info.onChange}>
                {info.options.map(option => {
                  return (
                    <option value={option.value}>{option.text}</option>
                  );
                })}
              </select>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        style={styles.modal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={this.props.onRequestClose}
      >
        <div className="setting-modal">
          <div className="heading-secondary setting-modal__header u-margin-bottom-medium">
            Adjust your workout
          </div>
          {this.getGroupCheckboxes(this.props.groups)}
          {this.getCycleInfoSelects(this.props.cycleInfo)}
        </div>
        <div onClick={() => this.props.onRequestClose()} className="btn__close">
          <i class="far fa-times-circle"></i>
        </div>
      </ReactModal>
    );
  }
}

const styles = {
  modal: {
    overlay: {
      backgroundColor: 'rgba(100,100,100,.7)',
      zIndex: '2'
    },
    content: {
      width: '80%',
      height: '80%',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      margin: 'auto'
    }
  }
};

export default SettingModal;