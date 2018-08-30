var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import "./style.css";
import { Popover, Position, Menu, Button } from "@blueprintjs/core";
import createMenu from "../utils/createMenu";

var MenuBar = (_temp2 = _class = function (_React$Component) {
  _inherits(MenuBar, _React$Component);

  function MenuBar() {
    var _temp, _this, _ret;

    _classCallCheck(this, MenuBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { isOpen: false, openIndex: null }, _this.handleInteraction = function (index) {
      return function (newOpenState) {
        if (!newOpenState && index !== _this.state.openIndex) {
          return; //return early because the "close" is being fired by another popover
        }
        _this.setState({
          isOpen: newOpenState,
          openIndex: newOpenState ? index : null
        });
      };
    }, _this.handleMouseOver = function (index) {
      return function () {
        var isOpen = _this.state.isOpen;

        if (isOpen) {
          _this.setState({
            openIndex: index
          });
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuBar.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        style = _props.style,
        menu = _props.menu,
        extraContent = _props.extraContent;
    var _state = this.state,
        isOpen = _state.isOpen,
        openIndex = _state.openIndex;

    return React.createElement(
      "div",
      { className: "menu-bar " + className, style: style },
      menu.map(function (topLevelItem, i) {
        var button = React.createElement(
          Button,
          {
            key: i,
            minimal: true,
            className: "menu-bar-item",
            onClick: topLevelItem.onClick,
            onMouseOver: topLevelItem.submenu ? _this2.handleMouseOver(i) : noop
          },
          topLevelItem.text
        );
        return !topLevelItem.submenu ? button : React.createElement(
          Popover,
          {
            key: i,
            minimal: true,
            portalClassName: "menu-bar-popover",
            position: Position.BOTTOM_LEFT,
            isOpen: isOpen && i === openIndex,
            onInteraction: _this2.handleInteraction(i),
            content: React.createElement(
              Menu,
              null,
              createMenu(topLevelItem.submenu)
            ),
            transitionDuration: 0,
            style: {
              transition: "none"
            },
            inline: true
          },
          button
        );
      }),
      extraContent
    );
  };

  return MenuBar;
}(React.Component), _class.defaultProps = {
  className: "",
  style: {}
}, _temp2);
export { MenuBar as default };


function noop() {}